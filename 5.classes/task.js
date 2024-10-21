class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    if (number < 0) {
        this._state = 0;
    } else if (number < 100) {
        this._state = number;
    } else {
        this._state = 100;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author; 
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }

  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  
  findBookBy(type, value) {
    let bookIndex = 0; 
    bookIndex = this.books.findIndex((findBook) => {
      return findBook[type] === value;
      })
    if (bookIndex >= 0) {
      return this.books[bookIndex];
     }
    return null;   
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex((findBook) => {
      return findBook.name === bookName;
    })
    if (bookIndex >= 0) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
 }

class Student {
  constructor(name) {
  this.name = name;//имя
  this.marks = {}; // свойство для хранения оценок
 }

addMark(score, nameSubject) { //метод добавления оценок {оценка, название предмета}
  if  (score > 5 || score < 2) {
    return console.log("Введите верную оценку");
  }
  if (!this.marks.hasOwnProperty(nameSubject)) {
    this.marks[nameSubject] = [];
  }
  this.marks[nameSubject].push(score);
}

getAverageBySubject(nameSubject) {
  if (!this.marks.hasOwnProperty(nameSubject)) {
    return 0;
  }
  return this.marks[nameSubject].reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0)
}

getAverage() {
  return Object.keys(this.marks).reduce((acc, item, index, arr) => {
  acc += this.getAverageBySubject(item);
  if (index === arr.length - 1) {
      return acc / arr.length;
  }
  return acc;
}, 0);
}

}
