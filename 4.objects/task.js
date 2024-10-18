function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || this.marks === ' ') {
    return 0;
  }
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
  }, 0);
}

Student.prototype.exclude = function (reason) {
  if (!this.hasOwnProperty('marks')) {
    return;
  }
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
student1.addMarks(8, 9, 11, 3);
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)

