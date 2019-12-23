const Quiz = require("../src/Quiz");
module.exports = class Class {
  constructor({ name }) {
    this.name = name;
    this.quizes = [];
    this.students = [];
  }

  addQuiz(questions = []) {
    const quiz = new Quiz();
    for (const question of questions) {
      quiz.addQuestion(question);
    }
    this.quizes.push(quiz);
  }

  join(student) {
    this.students.push(student);
    student.join(this);
  }

  grade() {
    let grades = {};
    for (const quiz of this.quizes) {
      for (const [studentId, grade] of Object.entries(quiz.grade())) {
        if (grades[studentId] === undefined) {
          grades[studentId] = 0;
        }
        grades[studentId] += grade;
      }
    }
    return grades;
  }
};
