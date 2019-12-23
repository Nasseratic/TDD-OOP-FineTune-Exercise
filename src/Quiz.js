const Question = require("../src/Question");
module.exports = class Quiz {
  constructor() {
    this.questions = [];
  }

  addQuestion(params) {
    this.questions.push(new Question(params));
  }

  submit({ studentId, answers }) {
    for (const [index, question] of this.questions.entries()) {
      if (answers[index] !== undefined)
        question.answer({ studentId, answer: answers[index] });
    }
  }

  getStudentAnswers(studentId) {
    return this.questions.map(question => question.getStudentAnswer(studentId));
  }

  grade() {
    let grades = {};
    for (const question of this.questions) {
      for (const [studentId, answer] of Object.entries(question.getAnswers())) {
        if (grades[studentId] === undefined) {
          grades[studentId] = 0;
        }
        grades[studentId] += answer.correct ? 1 : 0;
      }
    }
    return grades;
  }
};
