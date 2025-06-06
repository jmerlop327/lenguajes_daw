const palabras = ["pizza", "trafalgar", "queso", "masa", "tomate", "horno", "sabroso", "ingredientes", "receta", "delicioso"];
let palabraActual = "";
let anagramaActual = "";
let intentos = 0;
let puntos = 0;
let puntuacionMaxima = 0;
let jugadas = 0;
const maxJugadas = 5;
let juegoIniciado;
let palabrasUsadas = [];

// Selecciona una palabra aleatoria y genera su anagrama
function nuevaPalabra() {
    if (jugadas >= maxJugadas) {
        finalizarJuego();
    } else {
        //obtener una palabra que no haya salido en la jugada (5 palabras)
        let indiceAleatorio = Math.floor(Math.random() * palabras.length);
        while (palabrasUsadas.includes(indiceAleatorio)) {
            //calcula otro número
            indiceAleatorio = Math.floor(Math.random() * palabras.length);
        }
        palabraActual = palabras[indiceAleatorio];
        palabrasUsadas.push(indiceAleatorio);
        anagramaActual = mezclarPalabra(palabraActual);
        document.getElementById("anagrama").textContent = anagramaActual;
        document.getElementById("mensaje").textContent = "";
        intentos = 0;
        jugadas++;
    }

}

// Mezcla las letras de una palabra
function mezclarPalabra(palabra) {
    // Convertir la palabra en un array de caracteres para poder modificarlos
    let caracteres = palabra.split('');
    // Implementar el algoritmo Fisher-Yates para mezclar
    for (let i = caracteres.length - 1; i > 0; i--) {
        // Generar un índice aleatorio entre 0 e i
        let j = Math.floor(Math.random() * (i + 1));
        // Intercambiar los caracteres en las posiciones i y j
        let temp = caracteres[i];
        caracteres[i] = caracteres[j];
        caracteres[j] = temp;
    }
    // Construir la cadena resultante
    let resultado = '';
    for (let i = 0; i < caracteres.length; i++) {
        resultado += caracteres[i];
    }
    return resultado;
}
function comenzarJuego() {
    juegoIniciado = true;
    palabrasUsadas = [];
    nuevaPalabra();
    intentos = 0;
    puntos = 0;
    jugadas = 0;
    actualizarPuntuacion();
    document.getElementById("palabrasRestantes").textContent = maxJugadas;

}
// Verifica la respuesta del usuario
function verificarRespuesta() {
    if (juegoIniciado) {
        let entradaUsuario = document.getElementById("respuesta").value.toLowerCase();

        if (entradaUsuario === palabraActual) {
            let puntosGanados = 3 - intentos;
            puntos += puntosGanados;
            document.getElementById("mensaje").textContent = "Correcto! " + puntosGanados + " puntos";
            nuevaPalabra();
        } else {
            intentos++;
            if (intentos >= 3) {
                document.getElementById("mensaje").textContent = "Incorrecto! La palabra era " + palabraActual;
                nuevaPalabra();
            } else {
                document.getElementById("mensaje").textContent = "Incorrecto! Intento " + intentos + "/3";
            }
        }
        document.getElementById("respuesta").value = "";
        actualizarPuntuacion();
    } else {
        document.getElementById("mensaje").textContent = "Debes iniciar el juego";
    }
}

// Actualiza la puntuación en pantalla
function actualizarPuntuacion() {
    document.getElementById("pActual").textContent = puntos;
    if (puntos > puntuacionMaxima) {
        puntuacionMaxima = puntos;
    }
    document.getElementById("pMax").textContent = puntuacionMaxima;
    document.getElementById("intentosRest").textContent = 3 - intentos;
    document.getElementById("palabrasRestantes").textContent = maxJugadas - jugadas;
}

// Finaliza el juego y muestra el mensaje
function finalizarJuego() {
    juegoIniciado = false;
    alert("Juego terminado! Puntuación final: " + puntos);
    puntos = 0;
    jugadas = 0;
    palabrasUsadas = [];
    actualizarPuntuacion();
}

// Inicia el juego al cargar la página
window.onload = function () {
    juegoIniciado = true;
    actualizarPuntuacion();
    nuevaPalabra();
};
