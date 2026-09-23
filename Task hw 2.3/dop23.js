/*задание 2  */
let clientOS = 0;

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else {
  console.log('Установите версию приложения для Android по ссылке');
}

/*задание 3 */

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