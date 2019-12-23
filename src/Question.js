module.exports = class Question {
  constructor({ text, choices, correctAnswerIndex }) {
    if (
      (text === undefined || choices === undefined,
      correctAnswerIndex === undefined)
    )
      throw Error("Missing params");
    this.text = text;
    this.choices = choices;
    this.correctAnswerIndex = correctAnswerIndex;
    this.answers = {};
  }

  answer({ studentId, answer }) {
    this.answers[studentId] = {
      answer,
      correct: answer == this.correctAnswerIndex
    };
  }

  getStudentAnswer(studentId) {
    return this.answers[studentId];
  }

  getAnswers() {
    return this.answers;
  }
};
