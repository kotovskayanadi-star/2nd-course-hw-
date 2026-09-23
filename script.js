/* Задание 1*/
console.log("Привет");
console.log("Привет");


/*Задание 2*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


/*Задание 3*/
for (let i = 7; i <= 22; i++) {
    console.log(i);
}


/*Задание */
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let name in obj) {
    console.log(name + " — зарплата " + obj[name] + " долларов");
}


/*Задание 5*/
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(n);
console.log(num);


/* Задание 6*/
let firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}

/* Дополнительное задание 1 */

let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}

console.log(k);
console.log(iterations);


/*Дополнительное задание 2*/

let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log((i + 1) + ". " + months[i]);
}


/*Дополнительное задание 3*/

let book = {
    название: "Мастер и Маргарита",
    автор: "Михаил Булгаков",
    "год издания": 1967,
    жанр: "Роман"
};

for (let property in book) {
    console.log(property + ": " + book[property]);
}


/*Дополнительное задание 4*/

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(numbers);
console.log(min);