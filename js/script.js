
let currentQuestionIndex = 0;


let questions = [];


document.addEventListener("DOMContentLoaded", () => {

    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            showQuestion();
        });


    document.getElementById('next-btn').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
});


function showQuestion() {

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');


    const currentQuestion = questions[currentQuestionIndex];


    questionElement.textContent = currentQuestion.question;


    optionsElement.innerHTML = '';


    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(li);
    });
}


function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.answer) {
        alert('Correto!');
    } else {
        alert('Errado!');
    }


    document.getElementById('next-btn').disabled = false;
}


function showResults() {
    alert('Quiz completo!'); // Exibe uma mensagem de conclusão do quiz
}