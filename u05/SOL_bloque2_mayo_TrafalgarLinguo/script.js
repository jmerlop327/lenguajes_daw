const spanishWords = [
    "sol", "casa", "árbol", "libro", "agua", "cielo", "luna", "flor", "camino", "puerta",
    "mesa", "silla", "ventana", "coche", "rio", "sol", "nube", "ciudad", "jardín", "playa"
];
const englishWords = [
    "sun", "house", "tree", "book", "water", "sky", "moon", "flower", "path", "door",
    "table", "chair", "window", "car", "river", "sun", "cloud", "city", "garden", "beach"
];
let palabraActual;
let respuestaCorrecta;
let palabrasUsadas = [];
let indiceActual = 0;
let score = 0;
let highScore = 0;
let gameActive = false;
let wordDisplay;
let answerInput;
let startBtn;
let submitBtn;
let messageDisplay;
let scoreDisplay;
window.onload = function () {
    wordDisplay = document.getElementById('word');
    answerInput = document.getElementById('answer');
    startBtn = document.getElementById('startBtn');
    submitBtn = document.getElementById('submitBtn');
    messageDisplay = document.getElementById('message');
    scoreDisplay = document.getElementById('score');
}

function startGame() {
    palabrasUsadas = [];
    indiceActual = 0;
    score = 0;
    gameActive = true;
    messageDisplay.textContent = "";
    answerInput.value = "";
    // Selecciona la siguiente palabra
    siguientePalabra();
}

function checkAnswer() {
    if (!gameActive) {
        messageDisplay.textContent = "Press START!";
    } else {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === respuestaCorrecta) {
            score++;
            messageDisplay.textContent = "Correct! " + score + " points.";
        } else {
            messageDisplay.textContent = `Incorrect! The correct translation was "${respuestaCorrecta}".`;
            endGame();
        }
        answerInput.value="";
        siguientePalabra();
    }

}
function siguientePalabra() {
    if (palabrasUsadas.length < spanishWords.length) {
        let usada = true;
        while (usada) {
            const randomIndex = Math.floor(Math.random() * spanishWords.length);
            usada = false;
            let pal = spanishWords[randomIndex];
            for (let i = 0; i <= palabrasUsadas.length; i++) {
                if (palabrasUsadas[i] === pal) {
                    usada = true;
                }
            }
            indiceActual = randomIndex;
        }
        palabraActual = spanishWords[indiceActual];
        respuestaCorrecta = englishWords[indiceActual].toLowerCase();
        palabrasUsadas.push(palabraActual);
        wordDisplay.textContent = palabraActual;
    } else {
        gameActive = false;
        messageDisplay.textContent = `You got the maximum score congratulations!
        You got ${score} points!`;
        wordDisplay.textContent = "Press Start to play again.";
        if (score > highScore) {
            highScore = score;
            scoreDisplay.textContent = `High Score: ${highScore}`;
        }
    }
}

function endGame() {
    gameActive = false;
    wordDisplay.textContent = "Game Over! Press Start to play again.";
    if (score > highScore) {
        highScore = score;
        scoreDisplay.textContent = `High Score: ${highScore}`;
    }
    messageDisplay.textContent += `You got ${score} points!`;
}