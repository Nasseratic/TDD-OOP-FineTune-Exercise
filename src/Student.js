module.exports = class Student {
  constructor({ name }) {
    if (name === undefined) throw Error("Student must have a name");

    this.name = name;
  }
};
