const Class = require("../src/Class");
describe("Class class", () => {
  describe("create new class", () => {
    it("on creating a new class, it should be created correctly", () => {
      const CLASS_NAME = "Math1";
      const aClass = new Class({ name: CLASS_NAME });
      expect(aClass).toEqual({ name: CLASS_NAME, quizes: [], students: [] });
    });

    it("on creating a new class with missing params, it should throw an error", () => {
      expect(() => {
        new Class();
      }).toThrow();
    });
  });
  it("when a teacher adds a quiz, or more, to a class it is should be added correctly", () => {
    const Quiz = require("../src/Quiz");

    const aClass = new Class({ name: "Math" });
    const aQuiz = new Quiz({});
    aQuiz.addQuestion({
      text: "2 + 3 ?",
      choises: ["3", "5", "2"],
      correctAnswerIndex: 1
    });

    aClass.addQuiz([
      { text: "2 + 3 ?", choises: ["3", "5", "2"], correctAnswerIndex: 1 }
    ]);

    aClass.addQuiz([
      { text: "2 + 3 ?", choises: ["3", "5", "2"], correctAnswerIndex: 1 }
    ]);

    expect(aClass.quizes[0]).toEqual(aQuiz);
    expect(aClass.quizes[1]).toEqual(aQuiz);
  });

  it("when student joins a class, the student should exist in the class", () => {
    const Student = require("../src/Student");
    const aClass = new Class({ name: "Math" });
    const aStudent = new Student({ name: "Mohamed" });
    aClass.join(aStudent);
    expect(aClass.students[0]).toBe(aStudent);
    expect(aStudent.classes).toContain(aClass);
  });
  it("when student joins more than one class, the student should exist in all classes joined", () => {
    const Student = require("../src/Student");
    const aClass = new Class({ name: "Math" });
    const anotherClass = new Class({ name: "Science" });
    const aStudent = new Student({ name: "Mohamed" });
    aClass.join(aStudent);
    anotherClass.join(aStudent);
    expect(aClass.students[0]).toBe(aStudent);
    expect(anotherClass.students[0]).toBe(aStudent);
    expect(aStudent.classes).toContain(aClass);
    expect(aStudent.classes).toContain(anotherClass);
  });

  it("classes can be graded", () => {
    const aClass = new Class({ name: "Math" });

    aClass.addQuiz([
      { text: "2+3 ?", choises: ["3", "5", "2"], correctAnswerIndex: 1 }
    ]);

    aClass.addQuiz([
      { text: "2+1 ?", choises: ["3", "5", "2"], correctAnswerIndex: 0 }
    ]);

    // assume that no students can submit but the students joined the class, just for simplicity
    // student 1
    aClass.quizes[0].submit({ studentId: "st1", answers: [0] });

    // student 2
    aClass.quizes[0].submit({ studentId: "st2", answers: [1] });

    // student 1
    aClass.quizes[1].submit({ studentId: "st1", answers: [0] });

    // student 2
    aClass.quizes[1].submit({ studentId: "st2", answers: [0] });

    expect(aClass.grade()).toEqual({
      ["st1"]: 1,
      ["st2"]: 2
    });
  });
});
