const Class = require("../src/Class");
describe("Class class", () => {
  describe("create new class", () => {
    it("when create new class, it should be created correctly", () => {
      const CLASS_NAME = "Math1";
      const aClass = new Class({ name: CLASS_NAME });
      expect(aClass).toEqual({ name: CLASS_NAME, quizes: [], students: [] });
    });

    it("when create new class with missing params, it should throw an error", () => {
      expect(() => {
        new Class();
      }).toThrow();
    });
  });
  it("when teacher add a quiz or many to a class is should be added correctly", () => {
    const Quiz = require("../src/Quiz");

    const aClass = new Class({ name: "Math" });
    const aQuiz = new Quiz({});
    aQuiz.addQuestion({
      text: "2+3 ?",
      choises: ["3", "5", "2"],
      correctAnswerIndex: 1
    });

    aClass.addQuiz([
      { text: "2+3 ?", choises: ["3", "5", "2"], correctAnswerIndex: 1 }
    ]);

    aClass.addQuiz([
      { text: "2+3 ?", choises: ["3", "5", "2"], correctAnswerIndex: 1 }
    ]);

    expect(aClass.quizes[0]).toEqual(aQuiz);
    expect(aClass.quizes[1]).toEqual(aQuiz);
  });

  it("when student join a class, the student should exist in the class", () => {
    const Student = require("../src/Student");
    const aClass = new Class({ name: "Math" });
    const aStudent = new Student({ name: "Mohamed" });
    aClass.join(aStudent);
    expect(aClass.students[0]).toBe(aStudent);
    expect(aStudent.classes).toContain(aClass);
  });
  it("when student join more than one class, the student should exist in all classes which joined", () => {
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
});
