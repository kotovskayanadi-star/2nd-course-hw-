let number = prompt('Пожалуйста, введите любое число');

number = Number(number);

if (isNaN(number)) {
  alert('Вы ввели не число');
} else if (number % 2 === 0) {
  alert('Число четное');
} else {
  alert('Число нечетное');
}