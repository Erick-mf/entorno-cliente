function potencia(n, x) {
    return Math.pow(n, x);
}

function llamarPotencia() {
    let num = parseInt(document.getElementById("num").value);
    let aux = parseInt(document.getElementById("potencia").value);

    let resultado = potencia(num, aux);

    document.getElementById("resultado").innerHTML = resultado;
}

function limpiar() {
    document.getElementById("num").value = "";
    document.getElementById("potencia").value = "";
    document.getElementById("resultado").innerHTML = "";
}
