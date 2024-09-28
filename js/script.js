let currentQuestionIndex = 0;
let questions = [];

document.addEventListener("DOMContentLoaded", () => {
    // Carregar perguntas de um arquivo JSON
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            updateProgress(); // Atualiza o progresso inicial
            showQuestion();
        });
});

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    // Pegar a pergunta atual
    const currentQuestion = questions[currentQuestionIndex];

    // Exibir a pergunta
    questionElement.textContent = currentQuestion.question;

    // Limpar as opções anteriores
    optionsElement.innerHTML = '';

    // Exibir as opções da pergunta atual
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('option'); // Adiciona uma classe para estilização, se necessário
        li.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(li);
    });

    // Atualizar o progresso sempre que uma pergunta é exibida
    updateProgress();
}

function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    // Verificar se a resposta está correta ou errada
    if (answer === currentQuestion.answer) {
        alert('Correto!');
    } else {
        alert('Errado!');
    }

    // Passar automaticamente para a próxima pergunta
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();  // Exibir a próxima pergunta
    } else {
        showResults();  // Exibir os resultados ao final do quiz
    }
}

function showResults() {
    alert('Quiz completo!'); // Exibe uma mensagem de conclusão do quiz
}

function updateProgress() {
    // Pegar os elementos de progresso
    const progressElement = document.querySelector('.quiz-progress span:last-child');
    const progressBar = document.querySelector('.progress-bar');

    // Atualizar o texto do progresso, ex: "2/3"
    progressElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

    // Atualizar a barra de progresso
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Botões de navegação
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});
