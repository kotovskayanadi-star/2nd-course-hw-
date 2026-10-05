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