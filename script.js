/* Задание 1*/

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


/* Задание 2*/

function evenOrOdd(n) {
  if (n % 2 == 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}


/* Задание 3 */

function printSquare(n) {
  console.log(n * n);
}

function getSquare(n) {
  return n * n;
}


/* Задание 4*/

function correctAge(age) {
  if (age < 0) {
    return 'Вы ввели неправильное значение';
  } else if (age >= 0 && age <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}


/* Задание 5*/

function multiply(a, b) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  }

  return a * b;
}


/* Задание 6*/

function cubeNumber() {
  let n = prompt('Введите число');
  n = Number(n);

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `n в кубе равняется ${n * n * n}`;
}


/* Задание 7*/

let circle1 = {
  radius: 5,

  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

let circle2 = {
  radius: 10,

  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

