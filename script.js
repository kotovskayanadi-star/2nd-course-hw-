// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);

  if (arr1[i] === 10) {
    break;
  }
}


// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 4) {
    console.log(i);
    break;
  }
}


// Задание 3
const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));


// Задание 4
const arr4 = [];

for (let i = 0; i < 3; i++) {
  arr4[i] = [];

  for (let j = 0; j < 3; j++) {
    arr4[i][j] = 1;
  }
}

console.log(arr4);


// Задание 5
const arr5 = [1, 1, 1];

arr5.push(2, 2, 2);

console.log(arr5);


// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort((a, b) => {
  if (typeof a === 'string') return 1;
  if (typeof b === 'string') return -1;
  return a - b;
});

const result6 = arr6.filter((item) => item !== 'a');

console.log(result6);


// Задание 7
const arr7 = [9, 8, 7, 6, 5];

const userNumber = Number(prompt('Угадайте число от 5 до 9'));

if (arr7.includes(userNumber)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}


// Задание 8
let str8 = 'abcdef';

str8 = str8.split('').reverse().join('');

console.log(str8);


// Задание 9
const arr9 = [
  [1, 2, 3],
  [4, 5, 6]
];

const result9 = [...arr9[0], ...arr9[1]];

console.log(result9);


// Задание 10
const arr10 = [];

for (let i = 0; i < 6; i++) {
  arr10.push(Math.floor(Math.random() * 10) + 1);
}

console.log(arr10);

for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}


// Задание 11
function getSquares(numbers) {
  return numbers.map((number) => number ** 2);
}

const arr11 = [1, 2, 3, 4, 5];

console.log(getSquares(arr11));


// Задание 12
function getStringLengths(strings) {
  return strings.map((string) => string.length);
}

const arr12 = ['яблоко', 'банан', 'апельсин'];

console.log(getStringLengths(arr12));


// Задание 13
function getNegativeNumbers(numbers) {
  return numbers.filter((number) => number < 0);
}

const arr13 = [1, -2, 3, -4, 5, -6];

console.log(getNegativeNumbers(arr13));


// Задание 14
const arr14 = [];

for (let i = 0; i < 10; i++) {
  arr14.push(Math.floor(Math.random() * 11));
}

const evenNumbers14 = arr14.filter((number) => number % 2 === 0);

console.log('Исходный массив:', arr14);
console.log('Четные числа:', evenNumbers14);


// Задание 15
const arr15 = [];

for (let i = 0; i < 6; i++) {
  arr15.push(Math.floor(Math.random() * 10) + 1);
}

const sum15 = arr15.reduce((sum, number) => sum + number, 0);
const average15 = sum15 / arr15.length;

console.log('Массив:', arr15);
console.log('Среднее арифметическое:', average15);