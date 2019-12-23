const Question = require("../src/Question");

describe("Qestion class", () => {
  describe("create new queations", () => {
    it("when create a new instance of Qestion, it should be created correctly", () => {
      const question = new Question({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      });
      expect(question).toEqual({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      });
    });

    it("when create a new instance of Qestion with missing params, it should throw error", () => {
      expect(
        () =>
          new Question({
            text: "apple begins with?"
          })
      ).toThrow();
    });
  });

  describe("answering questions", () => {
    it("when a question is answered, the question the answer should be saved", () => {
      const question = new Question({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      });
      question.answer({ studentId: "s1", answer: 1 });
      expect(question.getStudentAnswer("s1")).toBeDefined();
    });

    it("when a question is answered correctly, the answer should be correct", () => {
      const question = new Question({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      });
      question.answer({ studentId: "s1", answer: 0 });
      expect(question.getStudentAnswer("s1")).toEqual({
        answer: 1,
        correct: true
      });
    });

    it("when a question is answered incorrectly, the answer should be incorrect", () => {
      const question = new Question({
        text: "apple begins with?",
        choices: ["a", "b", "c"],
        correctAnswerIndex: 0
      });
      question.answer({ studentId: "s1", answer: 2 });
      expect(question.getStudentAnswer("s1")).toEqual({
        answer: 2,
        correct: false
      });
    });
  });
});
