const Student = require("../src/Student");

describe("Student class", () => {
  describe("create new student", () => {
    it("when create new student, it should be created correctly", () => {
      const STUDENT_NAME = "Mohamed";
      const student = new Student({ name: STUDENT_NAME });
      expect(student).toEqual({ name: STUDENT_NAME });
    });

    it("when create new student with missing params, it should throw an error", () => {
      expect(() => {
        new Student({});
      }).toThrow();
    });
  });
});
