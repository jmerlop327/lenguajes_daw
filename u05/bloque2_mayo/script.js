// Arrays de palabras en español e inglés. Las palabras iguales se guardan en los mismos índices
// Por ejemplo spanishWords[0]==="sol"  englishWords[0]==="sun"
const spanishWords = [
    "sol", "casa", "árbol", "libro", "agua", "cielo", "luna", "flor", "camino", "puerta",
    "mesa", "silla", "ventana", "coche", "rio", "sol", "nube", "ciudad", "jardín", "playa"
];
const englishWords = [
    "sun", "house", "tree", "book", "water", "sky", "moon", "flower", "path", "door",
    "table", "chair", "window", "car", "river", "sun", "cloud", "city", "garden", "beach"
];
// Declara las constantes y variables necesarias.
// Necesitarás guardar la palabra/indice a adivinar, los puntos de la jugada, la puntuación máxima, la respuesta del usuario, lo elementos HTML que necesitas usar, etc.
let palabraActual;
// Guarda si el juego está o no activo "Start"
let gameActive = false;
window.onload = function () {
    // Inicializa aquí los elementos que necesites para mostrar mensajes, botones, etc. Así se guardarán cuando cargue la página
}

function start() {
    // Haz las funciones necesarias para iniciar el juego cada vez que se pulsa "Start"
}

function checkAnswer() {
    // Comprueba si se acierta la traducción
}

function siguientePalabra() {
    // Obtén la siguiente palabra a adivinar
    // La siguiente línea sirve para calcular un índice aleatorio del array de palabras
    const randomIndex = Math.floor(Math.random() * spanishWords.length);
}

function end() {
    // Haz las funciones necesarias al terminar el juego
    // El juego puede acabar por fallo, por pulsar "Start" o por acertar todas las palabras
}