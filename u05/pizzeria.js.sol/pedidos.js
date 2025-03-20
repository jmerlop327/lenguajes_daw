let contador = 1;
function validaForm() {
    let valid = true;
    document.getElementById("tel_cont").classList.remove("error");
    document.getElementById("pizza").classList.remove("error");
    //devuelve true si todos los datos son correctos
    // devuelve false si algún dato es incorrecto
    let dir = document.getElementById("direccion").value;
    let tel = document.getElementById("telefono").value;
    let piz = document.getElementById("pizza").value;
    if (null == dir || dir.length < 3) {
        valid = false;
        //console.log("la direccion no es válida");
    }
    if (null == tel || tel.length != 9 || isNaN(tel)) {
        valid = false;
        document.getElementById("tel_cont").classList.add("error");
        //console.log("el telefono no es válido");
    }
    if (null == piz || piz === "") {
        valid = false;
        document.getElementById("pizza").classList.add("error");
        //console.log("no ha escogido ninguna pizza");
    }
    return valid;
}
function calcularPrecio() {
    const precioBbq = 9.9;
    const precioCarbo = 8.75;
    const precioDeLaHuerta = 7.95;
    const precio4Quesos = 8.25;
    let pizza = document.getElementById("pizza").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = 0;
    if (isNaN(cantidad)) {
        //TODO: gestionar error e informar al usuario
    } else {
        switch (pizza) {
            case "barbacoa":
                precio = precioBbq;
                break;
            case "carbonara":
                precio = precioCarbo;
                break;
            case "cuatroquesos":
                precio = precio4Quesos;
                break;
            case "delahuerta":
                precio = precioDeLaHuerta;
                break;
            default:
                //TODO: gestionar error e informar al usuario
                break;
        }
        precio *= cantidad;
    }
    let precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = "" + precio + " €";
}

function aniadirPizza() {
    contador++;
    let bloquePizza = '<div id="pizza_pedido_' + contador + '" class="pizza_pedido">' +
        '<label for="pizza_' + contador + '">Selecciona tu pizza:' +
        '<select id="pizza_' + contador + '" name="pizza_' + contador + '" onchange="calcularPrecio()">' +
        '<option value="">Elige tu pizza</option>' +
        '<option value="barbacoa">Barbacoa (9,90 €)</option>' +
        '<option value="carbonara">Carbonara (8,75 €)</option>' +
        '<option value="cuatroquesos">Cuatro Quesos (8,25 €)</option>' +
        '<option value="delahuerta">De la huerta (7,95 €)</option>' +
        '</select>' +
        '</label>' +
        '<label for="cantidad_' + contador + '">Cantidad:' +
        '<input type="number" id="cantidad_' + contador + '" name="cantidad_' + contador + '" onchange="calcularPrecio()" min="1" max="10" required>' +
        '</label>' +
        '</div>';
    document.getElementById("pizzas").innerHTML += bloquePizza;
}
