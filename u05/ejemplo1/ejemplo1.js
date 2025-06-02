let elementoBoton;
let elementoEleccion;
window.onload = function () {
    elementoBoton = document.getElementById("boton");
    elementoEleccion = document.getElementById("eleccion");
    let color = prompt("de qué color quieres el botón", "");
    elementoBoton.classList.add(color);
    elementoEleccion.textContent = "El primer color elegido ha sido: " + color;
    elementoEleccion.classList.add(color);
}
function cambiaColor() {
    elementoBoton = document.getElementById("boton");
    let clases = elementoBoton.classList;
    if (clases.contains("rojo")) {
        clases.remove("rojo");
        clases.add("verde");
    } else if (clases.contains("verde")) {
        clases.remove("verde");
        clases.add("amarillo");
    } else if (clases.contains("amarillo")) {
        clases.remove("amarillo");
        clases.add("azul");
    } else if (clases.contains("azul")) {
        clases.remove("azul");
        clases.add("rojo");
    }
}