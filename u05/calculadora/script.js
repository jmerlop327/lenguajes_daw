function operar(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    document.getElementById("num1").value = num1;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    document.getElementById("num2").value = num2;
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
            break;
        default:
            resultado = 0;
    }

    document.getElementById("resultado").value = resultado;
}

function reset() {
    const inputs = document.getElementsByTagName("input");
    for (let i=0;i<inputs.length;i++) {
        inputs[i].value = "";
    }
}