const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);

// {
//   cors: {
//     origin: "https://fronted-adress-gena.ru:8080",
//   },
// }

const crypto = require("crypto");
const randomId = () => crypto.randomBytes(8).toString("hex");
const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();
const { InMemoryAnswersStore } = require("./answersStore");
const answersStore = new InMemoryAnswersStore();

const states = {
  SHOWQUESTION: "SHOWQUESTION",
  SHOWRESULTS: "SHOWRESULTS",
  WAITIGUSERS: "WAITIGUSERS",
};
let currentState = states.WAITIGUSERS;

let qurrentQuestionId = 0;

let timer = 20.0;

let sortedScores = null;

var countDown = null;

io.use((socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      socket.username = session.username;
      return next();
    }
  }
  const username = socket.handshake.auth.username;
  if (!username) {
    console.log("No username");
    return next(new Error("invalid username"));
  }
  socket.sessionID = randomId();
  socket.userID = randomId();
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  console.log("connection");
  // persist session
  sessionStore.saveSession(socket.sessionID, {
    userID: socket.userID,
    username: socket.username,
    connected: true,
  });

  // emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  // join the "userID" room
  socket.join(socket.userID);

  // emit current state
  if (currentState === states.SHOWQUESTION) {
    socket.emit("question", {
      question: answersStore.getQuestion(qurrentQuestionId), 
      timer: timer
    });
  } else if (currentState === states.SHOWRESULTS) {
    if(sortedScores === null) {
      sortedScores = answersStore.getScores();
    }
    socket.emit("results", sortedScores);
  } else if (currentState === states.WAITIGUSERS) {
    socket.emit("waiting");
  }


  // // fetch existing users
  // const users = [];
  // const messagesPerUser = new Map();
  // messageStore.findMessagesForUser(socket.userID).forEach((message) => {
  //   const { from, to } = message;
  //   const otherUser = socket.userID === from ? to : from;
  //   if (messagesPerUser.has(otherUser)) {
  //     messagesPerUser.get(otherUser).push(message);
  //   } else {
  //     messagesPerUser.set(otherUser, [message]);
  //   }
  // });
  // sessionStore.findAllSessions().forEach((session) => {
  //   users.push({
  //     userID: session.userID,
  //     username: session.username,
  //     connected: session.connected,
  //     messages: messagesPerUser.get(session.userID) || [],
  //   });
  // });
  // socket.emit("users", users);

  // notify existing users
  // socket.broadcast.emit("user connected", {
  //   userID: socket.userID,
  //   username: socket.username,
  //   connected: true,
  //   messages: [],
  // });

  
  // receive answer
  socket.on("answer", (score) => {
    answersStore.saveAnswer({ userID: socket.userID, score: score });
  });

  // receive setState message
  socket.on("setState", (state) => {
    if (state === states.SHOWQUESTION) {
      // reset local scores
      sortedScores = null;
      answersStore.resetRecentScores();
      // broadcast question
      socket.broadcast.emit("question", {
        question: answersStore.getQuestion(qurrentQuestionId), 
        timer: timer
      });
      // start timer
      countDown = setInterval(() => {
        timer -= 0.1;
        if(timer === 0.0) {
          // stop timer
          timer = 20.0;
          // get sorted scores
          if(sortedScores === null) {
            sortedScores = answersStore.getScores();
          }
          // broadcast results
          socket.broadcast.emit("results", sortedScores);
          currentState = states.SHOWRESULTS;
          // switch to next question
          qurrentQuestionId++;
          // clear timer
          clearInterval(countDown);
          countDown = null;
        }
      }, 100);
    } else if (state === states.SHOWRESULTS) {
      // clear timer
      if(countDown !== null) {
        clearInterval(countDown);
        countDown = null;
      }
      timer = 20.0;
      // get sorted scores
      if(sortedScores === null) {
        sortedScores = answersStore.getScores();
      }
      // broadcast results
      socket.broadcast.emit("results", sortedScores);
      currentState = states.SHOWRESULTS;
      // switch to next question
      qurrentQuestionId++;
    } else if (state === states.WAITIGUSERS) {
      // reset game
      qurrentQuestionId = 0;
      sortedScores = null;
      // clear timer
      if(countDown !== null) {
        clearInterval(countDown);
        countDown = null;
      }
      timer = 20.0;
      // clear leaderboard
      answersStore.resetGame();
      // broadcast waiting
      socket.broadcast.emit("waiting");
      currentState = states.WAITIGUSERS;
    }
  });



  // notify users upon disconnection
  socket.on("disconnect", async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.userID);
      // update the connection status of the session
      sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        username: socket.username,
        connected: false,
      });
    }
  });
});

const PORT = process.env.PORT || 8765;

httpServer.listen(PORT, '0.0.0.0', () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
