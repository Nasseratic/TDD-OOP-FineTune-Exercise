const Student = require("../src/Student");

describe("Student class", () => {
  describe("create new student", () => {
    it("on creating a new student, it should be created correctly", () => {
      const STUDENT_NAME = "Mohamed";
      const student = new Student({ name: STUDENT_NAME });
      expect(student).toEqual({ name: STUDENT_NAME, classes: [] });
    });

    it("on creating a new student with missing params, it should throw an error", () => {
      expect(() => {
        new Student({});
      }).toThrow();
    });
  });
});
