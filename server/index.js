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
const { InMemoryAnswersStore } = require("./AnswersStore");
const answersStore = new InMemoryAnswersStore();

const states = {
  SHOWQUESTION: "SHOWQUESTION",
  RESULTS: "SHOWRESULTS",
  WAITIGUSERS: "WAITIGUSERS",
};
let currentState = states.WAITIGUSERS;

let qurrentQuestionId = 1;

const initialTimer = 22.0;

let timer = initialTimer;

let sortedScores = null;

var countDown = null;

const adminToken = "8w6VBYgcY9cGcH8Q";


io.use((socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      socket.username = session.username;
      console.log(`${socket.username} connected again`);
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

  // emit if user is admin their rights
  if (socket.username === adminToken) {
    console.log("admin connected");
    socket.emit("admin");
  }

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
  } else if (currentState === states.RESULTS) {
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
    console.log(`${socket.username} answered ${score}`);
    answersStore.saveAnswer({ userID: socket.username, score: score });
  });

  // receive setState message
  socket.on("setState", (state) => {
    // showing question
    console.log(`current state: ${currentState}`);
    console.log(`$admin set state to ${state}`);
    if (state === states.SHOWQUESTION) {
      // check if question is showing
      if (currentState === states.SHOWQUESTION) {
        console.log("reincrement qestion");
        qurrentQuestionId++;
        if(countDown !== null) {
          clearInterval(countDown);
          countDown = null;
        }
      }
      // reset local scores
      sortedScores = null;
      answersStore.resetRecentScores();
      // broadcast question
      socket.broadcast.emit("question", {
        question: answersStore.getQuestion(qurrentQuestionId), 
        timer: timer
      });
      currentState = states.SHOWQUESTION;
      // start timer
      countDown = setInterval(() => {
        timer -= 0.1;
        if(timer < 0) {
          // stop timer
          timer = initialTimer;
          // clear timer
          clearInterval(countDown);
          countDown = null;
          // get sorted scores
          if(sortedScores === null) {
            sortedScores = answersStore.getScores();
          }
          if (qurrentQuestionId > answersStore.getMaxQuestionId()) {
            // no more questions, final
            currentState = states.WAITIGUSERS;
            // broadcast final results
            socket.broadcast.emit("finalResults", sortedScores);
          } else {
            // broadcast results
            socket.broadcast.emit("results", sortedScores);
          }
          currentState = states.RESULTS;
          // switch to next question
          qurrentQuestionId++;
        }
      }, 100);
    } else if (state === states.RESULTS) {
      if(currentState !== states.RESULTS) {
      // interupting cuestion, showing results
      console.log(`$admin set state to ${state}`);
      // clear timer
      if(countDown !== null) {
        clearInterval(countDown);
        countDown = null;
        console.log("cleared timer");
      }
      timer = initialTimer;
      // get sorted scores
      if(sortedScores === null) {
        sortedScores = answersStore.getScores();
      }
      // switch to next question
      qurrentQuestionId++;
      if (qurrentQuestionId > answersStore.getMaxQuestionId()) {
        // no more questions, final
        currentState = states.WAITIGUSERS;
        // broadcast final results
        socket.broadcast.emit("finalResults", sortedScores);
      } else {
        // broadcast results
        socket.broadcast.emit("results", sortedScores);
      }
      // set state to show results
      currentState = states.RESULTS;
    }
    } else if (state === states.WAITIGUSERS) {
      console.log(`$admin resets game`);
      // reset game
      qurrentQuestionId = 1;
      sortedScores = null;
      // clear timer
      if(countDown !== null) {
        clearInterval(countDown);
        countDown = null;
      }
      timer = initialTimer;
      // clear leaderboard
      answersStore.resetGame();
      sessionStore.clearAllSessions();
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
