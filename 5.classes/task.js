class PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state=100,type=null) {
      this.name=name;
      this.releaseDate=releaseDate;
      this.pagesCount=pagesCount;
      this.state=state;
      this.type=type;
    }
  
    
  fix() {
    this.state*=1.5;
  }
    get state() {
      return this._state;
    }
    set state(value) {
      if (value<0) {
        this._state=0;
      } else if (value>=100) {
        this._state=100;
      } else {
        this._state=value;
      }
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state,type="magazine") {
      super(name,releaseDate,pagesCount,state);
      this.type=type;
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author,name,releaseDate,pagesCount,state,type="book") {
      super(name,releaseDate,pagesCount,state);
      this.author=author;
      this.type=type;
    }
  }
  
  class NovelBook extends Book {
    constructor (author,name,releaseDate,pagesCount,state,type="novel") {
      super(author,name,releaseDate,pagesCount,state);
      this.type=type;
    }
  }
  
  class FantasticBook extends Book {
     constructor (author,name,releaseDate,pagesCount,state,type="fantastic") {
      super(author,name,releaseDate,pagesCount,state);
      this.type=type;
    }
  }
  
  class DetectiveBook extends Book {
    constructor (author,name,releaseDate,pagesCount,state,type="detective") {
      super(author,name,releaseDate,pagesCount,state);
      this.type=type;
    }
  }
  
  class Library {
    constructor(name,books=[]) {
      this.name=name;
      this.books=books;
    }
    addBook(book) {
      if (book.state>30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      for (let el of this.books) {
        for (let [key,val] of Object.entries(el)) {
          if (key===type && val===value) {
            return el;
          }
        }
      }
      return null;
    }
    giveBookByName(bookName) {
      for (let i=0;i<this.books.length;i++) {
        if (this.books[i].name===bookName) {
          this.books.splice(i,i,1);
          return this.books[i];
        } 
      }
      return null;
    }
  }
  
  class Student {
    constructor(name,marks=[]) {
      this.name=name;
      this.marks=marks;
    }
  
    addMark(mark,subjName) {
      if (mark>=2 && mark<=5) {
        if(this.marks.length===0) {
          this.marks.push({[subjName]:[mark]});
        } else {
          for (let obj of this.marks) {
            if (obj?.[subjName]) {
              obj[subjName].push(mark);
              return true;
            }
          }
          this.marks.push({[subjName]:[mark]});
          }
        }
      return false;
        }
    getAverageBySubject(subject) {
      for (let mrks of this.marks) {
        for (let key of Object.keys(mrks)) {
          if (key===subject) {
            let res=mrks[key].reduce((acc,item,idx,arr) => {
              acc+=item;
              if (idx===arr.length-1) {
                return acc/arr.length;
              } else {
                return acc;
              }
            },0);
            return res;
          }
        }
      }
      this.marks.push({[subject]: []});
      return 0;
    }
    getAverage() {
      let sum=0;
      let count=0;
      for (let el of this.marks) {
        for (let j of Object.keys(el)) {
          el[j].map((item) => {
            sum+=item;
            count+=1;
          });
        }
      }
      return sum/count;
    }
  }