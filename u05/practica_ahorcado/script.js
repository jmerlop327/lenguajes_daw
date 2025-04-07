// Lista de palabras disponibles para el juego
let palabras = ["RESCATE", "ACOTADO", "CORNISA", "LASTRAR", "AVISTAR", "CABEZAL", "DILECTO", "SORTIJA", "POLLINO", "MIRADOR", "ARRABAL", "FRAGATA", "CANSINO", "COLADOR", "OBCECAR", "INSIGNE", "PASADOR", "CALIDAD", "DIALOGO", "MUTILAR"];

// Número máximo de fallos permitidos antes de perder el juego
const FALLOS_PERMITIDOS = 7;
// Longitud de las palabras en el juego
const LONGITUD_PALABRAS = 7;

// Variables de estado del juego
let fallos = 0,
    aciertosTotales = 0,
    puntuacion = 0,
    puntuacionMax = 0,
    puntoUltimaLetra = 0,
    letrasUsadas = [],
    palabrasEnJuego = palabras,
    numPalabrasEnJuego = palabras.length,
    palabrasRestantes = palabras.length,
    palabraSeleccionada = null;

let inputLetras = document.querySelectorAll(".letras"),
    inputLetraComp = document.querySelector("#letra"),
    spanActual = document.querySelector("#pActual"),
    spanUltima = document.querySelector("#pUltima"),
    spanMax = document.querySelector("#pMax"),
    spanFallos = document.querySelector("#fallos"),
    spanPermitido = document.querySelector("#fPermitidos"),
    spanPalabrasRestantes = document.querySelector("#palabrasRestantes"),
    pErrores = document.getElementById("errores"),
    pMensajes = document.getElementById("mensajes"),
    spanLetrasUsadas = document.getElementById("letrasUsadas");

// Mostrar la cantidad máxima de fallos permitidos
spanPermitido.textContent = FALLOS_PERMITIDOS;

// Función para mostrar errores en la interfaz
function mostrarError(mensaje) {
    pErrores.textContent = mensaje;
}

// Función para mostrar mensajes informativos
function mostrarMsg(mensaje) {
    pMensajes.textContent = mensaje;
}

// Funciones para limpiar los mensajes y errores en pantalla
function limpiarError() {
    pErrores.textContent = "";
}
function limpiarMsg() {
    pMensajes.textContent = "";
}

// Inicia el juego seleccionando una nueva palabra
function comenzar() {
    reinicio();
    let index = obtieneIndex();
    if (index == -1) {
        mostrarError("No hay más palabras disponibles");
        return;
    } else {
        limpiaLetras();
        palabraSeleccionada = palabras[index];
        spanPalabrasRestantes.textContent = numPalabrasEnJuego;
    }
    mostrarMsg("¡Se ha seleccionado una palabra aleatoria!");
}

// Comprueba la letra introducida por el jugador
function comprobarLetra() {
    limpiarError();
    limpiarMsg();
    let letra = inputLetraComp.value;
    if (letra.length <= 0) {
        mostrarError("No ha introducido ninguna letra");
    } else if (!esLetraValida(letra.toUpperCase())) {
        mostrarError("La letra introducida no es válida, Solo se permiten letras de la A a la Z sin acentuar");
    } else if (null == palabraSeleccionada || palabraSeleccionada.length <= 0) {
        mostrarError("No hay ninguna palabra cargada, antes debes comenzar el juego");
    } else if (letraUsada(letra)) {
        mostrarError("¡Letra ya introducida!");
    } else {
        let listaIndex = compruebaLetra(letra);
        let aciertos = listaIndex.length;
        let puntos = calculaPuntuacion(aciertos);
        for (let i = 0; i < listaIndex.length; i++) {
            let index = listaIndex[i];
            inputLetras[index].value = letra.toUpperCase();
        }
        actualizaDatos(puntos, aciertos);
        letrasUsadas.push(letra.toUpperCase());
        if (aciertosTotales >= LONGITUD_PALABRAS) {
            mostrarMsg("¡Has ganado! - Puntuación final: " + puntuacion);
            reinicio();
        }else if (fallos >= FALLOS_PERMITIDOS) {
            mostrarMsg("¡Has perdido!, la palabra era: " + palabraSeleccionada);
            reinicio();
        } else {
            mostrarMsg("Has conseguido " + puntos + " puntos");
        }
        spanLetrasUsadas.innerHTML += " " + letra.toUpperCase();
    }
    inputLetraComp.value = "";

}

// Comprueba si la letra ingresada es válida
function esLetraValida(letra) {
    return letra.match(/[A-Za-z]/);
}

// Reinicia el juego y los valores de las variables
function reinicio() {
    puntuacion = 0;
    puntoUltimaLetra = 0;
    spanActual.textContent = 0;
    spanUltima.textContent = 0;
    aciertosTotales = 0;
    fallos = 0;
    spanFallos.textContent = 0;
    letrasUsadas = [];
    palabraSeleccionada = null;
    spanLetrasUsadas.innerHTML = "";
    limpiaLetras();
    limpiarError();
}

// Comprueba si la letra ya ha sido utilizada
function letraUsada(letra) {
    let usada = false;
    if (letrasUsadas.indexOf(letra.toUpperCase()) >= 0) {
        usada = true;
    }
    return usada;
}

// Actualiza la puntuación y los fallos
function actualizaDatos(puntos, puntosAct) {
    puntuacion += puntos;
    puntoUltimaLetra = puntos;
    spanActual.textContent = puntuacion;
    spanUltima.textContent = puntoUltimaLetra;
    if (puntos == 0) {
        fallos++;
    }
    if (puntuacion > puntuacionMax) {
        puntuacionMax = puntuacion;
        spanMax.textContent = puntuacionMax;
    }
    spanFallos.textContent = fallos;
}

// Comprueba si la letra ingresada está en la palabra
function compruebaLetra(letra) {
    let listaIndex = [];
    let palabraAux = palabraSeleccionada.split("");
    let index = palabraAux.indexOf(letra.toUpperCase());
    while (index >= 0) {
        aciertosTotales++;
        listaIndex.push(index);
        palabraAux[index] = "_";
        index = palabraAux.indexOf(letra.toUpperCase());
    }
    return listaIndex;
}

// Calcula la puntuación en función de los aciertos
function calculaPuntuacion(numAciertos) {
    //Puntuación jugada = N.º letras acertadas * (Máx. fallos permitidos - N.º fallos cometidos)
    return numAciertos * (FALLOS_PERMITIDOS - fallos);
}

/* Devuelve el índice de la siguiente palabra para jugar
Devuelve -1 si no quedan palabras por jugar */
function obtieneIndex() {
    let index = -1;
    let palabra = null;
    while (numPalabrasEnJuego > 0 && null == palabra) {
        index = aleatorio(0, palabras.length);
        palabra = palabrasEnJuego[index];
    }
    numPalabrasEnJuego--;
    return index;
}

// Genera un número aleatorio entre los valores dados
function aleatorio(inferior, superior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.round(aleat);
    return parseInt(inferior) + aleat;
}

// Limpia los cuadros de letras en la interfaz
function limpiaLetras() {
    for (let i = 0; i < inputLetras.length; i++) {
        inputLetras[i].value = "";
    }
}