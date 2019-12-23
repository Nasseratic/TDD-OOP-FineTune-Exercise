const Quiz = require("../src/Quiz");

describe("Quiz class", () => {
  it("when create new quiz, it should be created correctly", () => {
    expect(new Quiz()).toBeDefined();
  });

  it("when adding question, the question should be added correctly", () => {
    const Question = require("../src/Question");
    const quiz = new Quiz();
    expect(
      quiz.addQuestion({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      })
    ).toBeInstanceOf(Question);
    expect(quiz.questions[0]).toEqual(
      new Question({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      })
    );
  });

  it("students can submit answers to quizes", () => {
    const aQuiz = new Quiz();

    aQuiz.addQuestion({
      text: "5 + 5 = ?",
      choices: ["5", "10", "55"],
      correctAnswerIndex: 1
    });
    aQuiz.addQuestion({
      text: "5 + 10 = ?",
      choices: ["10", "15", "510"],
      correctAnswerIndex: 1
    });

    // student 1
    aQuiz.submit({ studentId: "st1", answers: [0, 1] });

    // student 2
    aQuiz.submit({ studentId: "st2", answers: [1, 1] });

    expect(aQuiz.getStudentAnswers("st1")).toEqual([
      { answer: 0, correct: false },
      { answer: 1, correct: true }
    ]);
    expect(aQuiz.getStudentAnswers("st2")).toEqual([
      { answer: 1, correct: true },
      { answer: 1, correct: true }
    ]);
  });
  it("student should be able to submit quizes (Partial)", () => {
    const Quiz = require("../src/Quiz");

    const aQuiz = new Quiz();

    aQuiz.addQuestion({
      text: "1 + 2 = ?",
      choises: ["1", "2", "3"],
      correctAnswerIndex: 2
    });

    aQuiz.addQuestion({
      text: "5 * 2 = ?",
      choises: ["5", "10", "15"],
      correctAnswerIndex: 1
    });

    // assume student can't answer index 1 before answring index 0
    aQuiz.submit({ studentId: "st1", answers: [0] });
    expect(aQuiz.question[0].getStudentAnswer("st1")).toBeDefined();
    expect(aQuiz.question[1].getStudentAnswer("st1")).toBeUndefined();
  });
  it("a quiz should be graded correctly", () => {
    const aQuiz = new Quiz();

    aQuiz.addQuestion({
      text: "5 + 5 = ?",
      choices: ["5", "10", "55"],
      correctAnswerIndex: 1
    });
    aQuiz.addQuestion({
      text: "5 + 10 = ?",
      choices: ["10", "15", "510"],
      correctAnswerIndex: 1
    });

    // student 1
    aQuiz.submit({ studentId: "st1", answers: [0, 0] });

    // student 2
    aQuiz.submit({ studentId: "st2", answers: [1, 1] });

    // student 3
    aQuiz.submit({ studentId: "st3", answers: [0, 1] });

    expect(aQuiz.grade()).toEqual({
      st1: 0,
      st2: 2,
      st3: 1
    });
  });
});
