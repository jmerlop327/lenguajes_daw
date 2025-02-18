window.onload = function () {
    let nombre = "";
    let elemento = document.getElementById("respuesta");
    nombre = prompt("Introduce tu nombre", "amigo");
    if (null == nombre) {
        alert("Hola, no introdujiste ningún nombre");
        elemento.classList.add("rojo");
    } else {
        alert("Hola " + nombre);
        elemento.classList.add("verde");
    }

    if (confirm("Es correcto tu nombre?")) {
        alert("Perfecto!");
    } else {
        alert("Oh, lo siento!");
    }

    elemento.innerHTML = "Página de ejemplo de " + nombre;
};