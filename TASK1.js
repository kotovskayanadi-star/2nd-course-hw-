let password = 'пароль';

let userPassword = prompt('Введите пароль');

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

/* Задание 2*/
let c = 5;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* Задание 3*/
let d = 50;
let e = 150;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
/* Задание 4*/
let a = '2';
let b = '3';
// Код выше изменять нельзя. Чтобы решить задачу исправьте код ниже:

alert(Number(a) + Number(b));

/* Задание 5*/
let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;

    default:
        console.log('Неверный номер месяца');
}

/*dop*/

let number = prompt('Пожалуйста, введите любое число');

number = Number(number);

if (isNaN(number)) {
    alert('Вы ввели не число');
} else if (number % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

/*dop2*/
let clientOS = 0;

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}

/*dop3*/

let clientDeviceYear = 2014;

if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}