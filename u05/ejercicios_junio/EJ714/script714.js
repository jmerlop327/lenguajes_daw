// Declara variables globales para almacenar referencias a elementos del DOM
let anioInput; // Referencia al campo de entrada del año de nacimiento
let boton;     // Referencia al botón de envío
let avisos;    // Referencia al elemento donde se mostrarán los mensajes de retroalimentación

// Ejecuta esta función cuando la ventana (página) se carga completamente
window.onload = function () {
    // Asigna el elemento con id="anio" a la variable anioInput
    anioInput = document.getElementById("anio");
    // Asigna el elemento con id="btnEnviar" a la variable boton
    boton = document.getElementById("btnEnviar");
    // Asigna el elemento con id="avisos" a la variable avisos
    avisos = document.getElementById("avisos");
}

// Función que se ejecuta al hacer click en el botón de envío
function enviarDatos() {
    // Obtiene el valor seleccionado del elemento <select> con id="opciones"
    let opcion = document.getElementById("opciones").value;
    // Convierte el valor del campo de año a un número entero
    let anio = parseInt(anioInput.value);
    // Define el año actual como una constante (2025)
    const anioActual = 2025;
    // Calcula la edad restando el año ingresado al año actual
    const edad = anioActual - anio;
    // Obtiene la lista de clases del elemento avisos para manipular su estilo
    let clasesAvisos = avisos.classList;

    // Verifica si la opción seleccionada es "adul" (Adulto) y la edad es menor a 18
    // triple igual === para comparar cadenas de texto
    if ("adul" === opcion && edad < 18) {
        // Si la clase "error" no está presente, la agrega para estilizar el mensaje como error
        if (!clasesAvisos.contains("error")) {
            avisos.classList.add("error");
        }
        // Muestra un mensaje de error en el elemento avisos
        avisos.textContent = "Para marcar la opción adulto debe tener al menos 18 años";
    } else {
        // Si la clase "error" está presente, la elimina para quitar el estilo de error
        if (clasesAvisos.contains("error")) {
            avisos.classList.remove("error");
        }
        // Muestra un mensaje de éxito en el elemento avisos
        avisos.textContent = "Datos enviados con éxito";
    }

    // Imprime la edad en la consola del desarrollador para propósitos de depuración
    console.log("edad: " + edad);
}