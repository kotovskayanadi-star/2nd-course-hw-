// Задание 1
const str1 = 'js';

console.log(str1.toUpperCase());


// Задание 2
function filterByStart(arr, str) {
  const searchStr = str.toLowerCase();

  return arr.filter((item) =>
    item.toLowerCase().startsWith(searchStr)
  );
}

const arr2 = ['Кошка', 'кот', 'Собака', 'Корабль', 'корова'];

console.log(filterByStart(arr2, 'ко'));


// Задание 3
const number3 = 32.58884;

console.log('До меньшего целого:', Math.floor(number3));
console.log('До большего целого:', Math.ceil(number3));
console.log('До ближайшего целого:', Math.round(number3));


// Задание 4
const numbers4 = [52, 53, 49, 77, 21, 32];

console.log('Минимальное значение:', Math.min(...numbers4));
console.log('Максимальное значение:', Math.max(...numbers4));


// Задание 5
function randomNumber() {
  const number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
}

randomNumber();


// Задание 6
function getRandomArray(number) {
  const arr = [];

  for (let i = 0; i < Math.floor(number / 2); i++) {
    arr.push(Math.floor(Math.random() * (number + 1)));
  }

  return arr;
}

console.log(getRandomArray(10));


// Задание 7
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(5, 15));


// Задание 8
const currentDate8 = new Date();

console.log(currentDate8);


// Задание 9
const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


// Задание 10
function formatDate(date) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDay = days[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${hours}:${minutes}:${seconds}`;
}

const date10 = new Date();

console.log(formatDate(date10));