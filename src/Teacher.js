const Class = require("../src/Class");
module.exports = class Teacher {
  constructor({ name }) {
    if (name === undefined) throw Error("Teacher must have a name");

    this.name = name;
    this.classes = [];
  }

  createNewClass(params) {
    this.classes.push(new Class(params));
  }
};
