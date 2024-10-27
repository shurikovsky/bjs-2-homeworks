function parseCount(count) {
  let number = Number.parseFloat(count);   
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number; 
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error("Треугольник с такими сторонами не существует"); 
    }
    this.a = a;
    this.b = b;
    this.c = c;   
  }

  get perimeter() {
    return this.a + this.b + this.c;;
  }
  
  get area() {
    let partPerimeter = 0.5 * this.perimeter;
    return  +(Math.sqrt(partPerimeter * (partPerimeter - this.a) * (partPerimeter - this.b) * (partPerimeter - this.c))).toFixed(3);
  }
}
  
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let triangle = {  
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      },
      get area() {
        return "Ошибка! Треугольник не существует"
      },
    }
    return triangle;
  }
}
