const Teacher = require("../src/Teacher");

describe("Teacher class", () => {
  describe("create new teacher", () => {
    it("when create new teacher, it should be created correctly", () => {
      const TEACHER_NAME = "Mark";
      const teacher = new Teacher({ name: TEACHER_NAME });
      expect(teacher).toEqual({ name: TEACHER_NAME });
    });

    it("when create new teacher with missing params, it should throw an error", () => {
      expect(() => {
        new Teacher({});
      }).toThrow();
    });
  });

  describe("Creating Classes and quizes", () => {
    it("when teacher create a new class, it should be created and added correctly", () => {
      const Class = require("../src/Class");
      const aTeacher = new Teacher({ name: "Mark" });
      const aClass = new Class({ name: "Math2" });
      expect(
        aTeacher.createNewClass({
          name: "Math2"
        })
      ).toEqual(aClass);
      expect(aTeacher.classes[0]).toEqual(aClass);
    });
  });
});
