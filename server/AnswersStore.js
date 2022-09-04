/* abstract */ class AnswersStore {
    getMaxQuestionId() {}
    getQuestion(id) {}
    saveAnswer(answer) {}
    resetRecentScores() {}
    resetGame() {}
    sortScores() {}
    getScores() {}
    checkRecentScores(userID) {}
  }

class InMemoryAnswersStore extends AnswersStore {
    constructor() {
        super();
        this.maxQuestions = 4;
        this.recentScores = new Map();
        this.totalScores = new Map();
        this.quizData = require("./quizData.json");
    }

    getMaxQuestionId() {
        return this.maxQuestions;
    }

    getQuestion(id) {
        return this.quizData.questions.find(q => q.question_id === id);
    }

    checkRecentScores() {
        return this.recentScores.has(userID);
    }

    saveAnswer(answer) {
        /* save answer */
        const { userID, score } = answer;
        if(!this.totalScores.has(userID)) {
            this.totalScores.set(userID, 0);
        }
        this.totalScores.set(userID, this.totalScores.get(userID) + score);
        this.recentScores.set(userID, score);
    }

    resetRecentScores() {
        /* reset recentScores */
        this.recentScores = new Map();
    }

    resetGame() {
        /* reset game */
        this.totalScores = new Map();
        this.resetRecentScores();
    }

    sortScores() {
        /* sort totalScores */
        this.totalScores = new Map([...this.totalScores.entries()].sort((a, b) => b[1] - a[1]));
    }

    getScores() {
        /* unite recentScores and totalScores and return them as json */
        this.sortScores();
        let scores = new Map();
        for (let [userID, score] of this.totalScores) {
            if(this.recentScores.has(userID)) {
                scores.set(userID, { recent: this.recentScores.get(userID), total: score });
            }
            else {
                scores.set(userID, { recent: 0, total: score });
            }
        }
        
        return Object.fromEntries(scores);
    }

}
module.exports = {
    InMemoryAnswersStore,
};