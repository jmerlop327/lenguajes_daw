function validaForm() {
    let valid = true;
    document.getElementById("tel_cont").classList.remove("error");
    document.getElementById("pizza").classList.remove("error");
    //devuelve true si todos los datos son correctos
    // devuelve false si algún dato es incorrecto
    let dir = document.getElementById("direccion").value;
    let tel = document.getElementById("telefono").value;
    let piz = document.getElementById("pizza").value;
    if(null == dir || dir.length < 3) {
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