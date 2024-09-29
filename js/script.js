let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Variável para armazenar o número de acertos
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
        li.classList.add('option'); // Adiciona uma classe para estilização
        li.addEventListener('click', () => selectAnswer(option, li));
        optionsElement.appendChild(li);
    });

    // Atualizar o progresso sempre que uma pergunta é exibida
    updateProgress();
}

function selectAnswer(answer, selectedOptionElement) {
    const currentQuestion = questions[currentQuestionIndex];

    // Desabilitar a interação com as opções após uma escolha
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none'; // Desabilita os cliques
    });

    // Verificar se a resposta está correta ou errada
    if (answer === currentQuestion.answer) {
        correctAnswersCount++;
        selectedOptionElement.style.backgroundColor = 'green'; // Muda a cor da opção correta para verde
    } else {
        selectedOptionElement.style.backgroundColor = 'red'; // Muda a cor da opção incorreta para vermelho

        // Também destacar a resposta correta
        options.forEach(option => {
            if (option.textContent === currentQuestion.answer) {
                option.style.backgroundColor = 'green'; // Destacar a resposta correta
            }
        });
    }

    // Espera 2 segundos antes de passar para a próxima pergunta
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();  // Exibir a próxima pergunta
        } else {
            showResults();  // Exibir os resultados ao final do quiz
        }
    }, 2000);
}

function showResults() {
    // Exibir a contagem de acertos no modal
    document.querySelector('.congrats-text').innerHTML = `
    <span style="font-size: 24px; font-weight: bold;">Parabéns!</span><br>
    <span style="font-size: 16px;">Você acertou ${correctAnswersCount} de ${questions.length} perguntas.</span>
    `;

    // Exibir o modal
    document.getElementById('initialModal').style.display = 'flex'; // Exibe o modal ao final do quiz
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
