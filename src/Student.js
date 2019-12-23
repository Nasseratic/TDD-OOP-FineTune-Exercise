module.exports = class Student {
  constructor({ name }) {
    if (name === undefined) throw Error("Student must have a name");

    this.name = name;
    this.classes = [];
  }

  join(newClass) {
    this.classes.push(newClass);
  }
};
