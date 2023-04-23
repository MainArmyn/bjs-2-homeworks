function Student(name, gender, age) {
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.marks=[];
  }
  Student.prototype.setSubject=function (subjectName) {
    this.subject=subjectName;
  };
  Student.prototype.addMarks=function (...marksToAdd) {
    if (this?.marks) {
      this.marks.push(...marksToAdd);
    }
  };
  Student.prototype.getAverage=function () {
    if (this?.marks &&  this.marks!==[]) {
      let middle=this.marks.reduce((acc,item,idx,arr) => {
        acc+=item;
        if (idx===arr.length-1) {
          return acc/arr.length;
        } 
        return acc;
      },0);
      return middle;
    } 
    return 0;
  }
  Student.prototype.exclude=function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded=reason;
  }
  