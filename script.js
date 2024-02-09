const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'London'],
        answer: 'Paris'
    },
    {
        question: 'What is 5 + 3?',
        options: ['7', '8', '9', '10'],
        answer: '8'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        answer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale'
    },
    {
        question: 'Which country is the largest by land area?',
        options: ['Russia', 'Canada', 'China', 'USA'],
        answer: 'Russia'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
        answer: 'Leonardo da Vinci'
    },
    {
        question: 'Which gas is most abundant in the Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
        answer: 'Nitrogen'
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'NaCl', 'O2'],
        answer: 'H2O'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        answer: 'William Shakespeare'
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        options: ['Diamond', 'Iron', 'Gold', 'Steel'],
        answer: 'Diamond'
    }
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option) => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.style.display = 'none';
    resultElement.innerText = `Your Score is ${score}/${quizData.length}`;
    resultElement.style.display = 'block';
}

submitButton.addEventListener('click', loadQuestion);

loadQuestion();

