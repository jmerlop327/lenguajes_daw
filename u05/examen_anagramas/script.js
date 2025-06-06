const palabras = ["pizza", "trafalgar", "queso", "masa", "tomate", "horno", "sabroso", "ingredientes", "receta", "delicioso"];
let palabraActual = "";
let anagramaActual = "";
let intentos = 0;
let puntos = 0;
let puntuacionMaxima = localStorage.getItem("puntuacionMaxima") || 0;
let jugadas = 0;
const maxJugadas = 5;

// Selecciona una palabra aleatoria y genera su anagrama
function nuevaPalabra() {
    if (jugadas >= maxJugadas) {
        finalizarJuego();
        return;
    }
    
    palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
    anagramaActual = mezclarPalabra(palabraActual);
    document.getElementById("anagrama").textContent = anagramaActual;
    document.getElementById("entrada").value = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("error").textContent = "";
    intentos = 0;
    jugadas++;
}

// Mezcla las letras de una palabra
function mezclarPalabra(palabra) {
    return palabra.split('').sort(() => Math.random() - 0.5).join('');
}

// Verifica la respuesta del usuario
function verificarRespuesta() {
    let entradaUsuario = document.getElementById("entrada").value.toLowerCase();
    
    if (entradaUsuario === palabraActual) {
        let puntosGanados = 3 - intentos;
        puntos += puntosGanados;
        document.getElementById("mensaje").textContent = `Correcto! +${puntosGanados} puntos`;
        setTimeout(nuevaPalabra, 1000);
    } else {
        intentos++;
        if (intentos >= 3) {
            document.getElementById("error").textContent = `Incorrecto! La palabra era "${palabraActual}"`;
            setTimeout(nuevaPalabra, 1500);
        } else {
            document.getElementById("error").textContent = `Incorrecto! Intento ${intentos}/3`;
        }
    }
    
    actualizarPuntuacion();
}

// Actualiza la puntuación en pantalla
function actualizarPuntuacion() {
    document.getElementById("puntos").textContent = puntos;
    if (puntos > puntuacionMaxima) {
        puntuacionMaxima = puntos;
        localStorage.setItem("puntuacionMaxima", puntuacionMaxima);
    }
    document.getElementById("puntuacionMaxima").textContent = puntuacionMaxima;
}

// Finaliza el juego y muestra el mensaje
function finalizarJuego() {
    alert(`Juego terminado! Puntuación final: ${puntos}`);
    puntos = 0;
    jugadas = 0;
    actualizarPuntuacion();
    nuevaPalabra();
}

// Inicia el juego al cargar la página
window.onload = function() {
    document.getElementById("puntuacionMaxima").textContent = puntuacionMaxima;
    nuevaPalabra();
};
