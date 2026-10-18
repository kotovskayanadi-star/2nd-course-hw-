
// Игра 1

function playGuessNumber(event) {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let userNumber;

    while (true) {
        userNumber = prompt("Угадай число от 1 до 100:");

        if (userNumber === null) {
            alert("Игра отменена.");
            return;
        }

        if (userNumber.trim() === "") {
            alert("Поле ввода не может быть пустым. Попробуй ещё раз.");
            continue;
        }

        userNumber = Number(userNumber);

        if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
            alert("Некорректный ввод. Введи целое число от 1 до 100.");
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

    let userAnswer;

    while (true) {
        userAnswer = prompt(
            `Реши пример:\n\n${firstNumber} ${operation} ${secondNumber}`
        );

        if (userAnswer === null) {
            alert("Игра отменена.");
            return;
        }

        if (userAnswer.trim() === "") {
            alert("Ответ не может быть пустым. Попробуйте ещё раз.");
            continue;
        }

        const answer = Number(userAnswer.trim());

        if (!Number.isFinite(answer)) {
            alert("Некорректный ввод. Введите ЦИФРЫ.");
            continue;
        }

        if (answer === correctAnswer) {
            alert("Верно! Молодец!");
        } else {
            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
        }

        break;
    }
}

// Игра 3

function playReverseText(event) {
    event.preventDefault();

    let userText;

    while (true) {
        userText = prompt("Введите текст:");

        if (userText === null) {
            alert("Ввод текста отменён.");
            return;
        }

        if (userText.trim() === "") {
            alert("Поле ввода не может быть пустым. Попробуйте ещё разочек))))))");
            continue;
        }

        break;
    }


    const reversedText = Array.from(userText).reverse().join("");

    alert(`Перевернутый текст:\n${reversedText}`);
}

//игра 4
function playRockPaperScissors(event) {
    event.preventDefault();

    const options = ["камень", "ножницы", "бумага"];
    let userChoice;

    while (true) {
        userChoice = prompt(
            "Выбери вариант:\nкамень, ножницы или бумага"
        );

        if (userChoice === null) {
            alert("Игра отменена.");
            return;
        }

        userChoice = userChoice.trim().toLowerCase();

        if (userChoice === "") {
            alert("Поле ввода не может быть пустым. Попробуй ещё раз.");
            continue;
        }

        if (!options.includes(userChoice)) {
            alert("Некорректный ввод. Введи: камень, ножницы или бумага.");
            continue;
        }

        break;
    }

    const computerChoice =
        options[Math.floor(Math.random() * options.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Ты победил!";
    } else {
        result = "Ты проиграл!";
    }

    alert(
        `Твой выбор: ${userChoice}\n` +
        `Выбор компьютера: ${computerChoice}\n\n` +
        `Результат: ${result}`
    );
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

        let userAnswer;
        while (true) {
            userAnswer = prompt(
                `${question.question}\n\n` +
                `${question.options.join("\n")}\n\n` +
                "Введите номер правильного ответа:"
            );

            if (userAnswer === null) {
                alert("Викторина отменена.");
                return;
            }

            if (userAnswer.trim() === "") {
                alert("Ответ не может быть пустым. Попробуйте ещё раз.");
                continue;
            }
            const answer = Number(userAnswer.trim());

            if (
                !Number.isInteger(answer) ||
                answer < 1 ||
                answer > question.options.length
            ) {
                alert(
                    `Некорректный ввод. Введите число от 1 до ${question.options.length}.`
                );
                continue;
            }
            userAnswer = answer;
            break;
        }

        if (userAnswer === question.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}.`);
}

// Игра 6

const colorGameButton = document.querySelector('#game6 .mini-game__button');

colorGameButton.addEventListener('click', function (event) {
    event.preventDefault();

    const randomColor = '#' + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, '0');

    document.body.style.backgroundColor = randomColor;

    document.querySelector('.hero').style.backgroundImage = 'none';
    document.querySelector('.about-games').style.backgroundImage = 'none';
    document.querySelector('.mini-games').style.backgroundImage = 'none';

    document.querySelector('.hero').style.backgroundColor = randomColor;
    document.querySelector('.about-games').style.backgroundColor = randomColor;
    document.querySelector('.mini-games').style.backgroundColor = randomColor;
});


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
// Игра 4
document
    .querySelector("#game4 .mini-game__button")
    .addEventListener("click", playRockPaperScissors);

// скролл кнопки "Поехали!" 


const startButton = document.querySelector('.hero__button');
const aboutGames = document.querySelector('#about-games');

startButton.addEventListener('click', function () {
    const startPosition = window.scrollY;
    const targetPosition = aboutGames.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1800;
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
});

//скролл об "Об играх"


const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        event.preventDefault();

        const gameId = card.getAttribute('href');
        const targetGame = document.querySelector(gameId);

        if (!targetGame) return;

        const startPosition = window.scrollY;
        const targetPosition =
            targetGame.getBoundingClientRect().top + window.scrollY;

        const distance = targetPosition - startPosition;


        const speed = 300;

        const duration = Math.abs(distance) / speed * 500;
        let startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(
                0,
                startPosition + distance * progress
            );

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    });
});
