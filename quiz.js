
// Игра 1

function playGuessNumber(event) {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let userNumber;

    while (true) {
        userNumber = prompt("Угадай число от 1 до 100:");

        if (userNumber === null) {
            return;
        }

        userNumber = Number(userNumber);

        if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
            alert("Введите целое число от 1 до 100.");
            continue;
        }

        if (userNumber < randomNumber) {
            alert("Загаданное число больше.");
        } else if (userNumber > randomNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert("Поздравляю! Ты угадал число!");
            break;
        }
    }
}

// Игра 2

function playArithmetic(event) {
    event.preventDefault();

    const operations = ["+", "-", "*", "/"];

    const operation =
        operations[Math.floor(Math.random() * operations.length)];

    let firstNumber;
    let secondNumber;
    let correctAnswer;

    if (operation === "/") {
        secondNumber = Math.floor(Math.random() * 9) + 1;
        correctAnswer = Math.floor(Math.random() * 10) + 1;
        firstNumber = secondNumber * correctAnswer;
    } else {
        firstNumber = Math.floor(Math.random() * 20) + 1;
        secondNumber = Math.floor(Math.random() * 20) + 1;

        if (operation === "+") {
            correctAnswer = firstNumber + secondNumber;
        } else if (operation === "-") {
            correctAnswer = firstNumber - secondNumber;
        } else if (operation === "*") {
            correctAnswer = firstNumber * secondNumber;
        }
    }

    const userAnswer = prompt(
        `Реши пример:\n\n${firstNumber} ${operation} ${secondNumber}`
    );

    if (userAnswer === null) {
        return;
    }

    if (Number(userAnswer) === correctAnswer) {
        alert("Верно! Молодец!");
    } else {
        alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }
}
// Игра 3

function playReverseText(event) {
    event.preventDefault();

    const userText = prompt("Введите текст:");

    if (userText === null) {
        return;
    }

    const reversedText = Array.from(userText).reverse().join("");

    alert(`Перевернутый текст:\n${reversedText}`);
}



//Игра 5
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function playQuiz(event) {

    if (event) {
        event.preventDefault();
    }

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

        const userAnswer = prompt(
            `${question.question}\n\n${question.options.join("\n")}\n\nВведите номер правильного ответа:`
        );

        if (Number(userAnswer) === question.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}.`);
}

// Игра 1
document
    .querySelector("#game1 .mini-game__button")
    .addEventListener("click", playGuessNumber);

// Игра 2
document
    .querySelector("#game2 .mini-game__button")
    .addEventListener("click", playArithmetic);

// Игра 3
document
    .querySelector("#game3 .mini-game__button")
    .addEventListener("click", playReverseText);