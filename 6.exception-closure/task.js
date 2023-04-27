function parseCount(num) {
    let res=Number.parseFloat(num);
    if (isNaN(res)) {
      throw Error("Невалидное значение");
    } else {
      return res;
    }
  }
  function validateCount(str) {
    try {
      return parseCount(str);
    } catch(error) {
      return error;
    }
  }
  class Triangle {
    constructor(a,b,c) {
      if ((b+c)<a || (a+b)<c || (a+c)<b) {
        throw Error("Треугольник с такими сторонами не существует");
      } else {
        this.a=a;
        this.b=b;
        this.c=c;
      }
    }
    get perimeter() {
      return this.a+this.b+this.c
    }
    get area() {
      let p=(this.a+this.b+this.c)/2;
      return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    }
  }
  function getTriangle(a,b,c) {
    let res;
    try{
      res=new Triangle(a,b,c);
      return res;
    } catch(error) {
      return {
        get area(){ return "Ошибка! Треугольник не существует"},get perimeter(){ return 'Ошибка! Треугольник не существует'}
      }
    }
  }
  