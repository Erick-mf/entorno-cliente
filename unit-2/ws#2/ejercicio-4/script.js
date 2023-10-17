function calcularHipotenusa() {
    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);

    let hipotenusa = Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));
    // segunda opcion let hipotenusa = Math.hypot(lado1, lado2);

    return document.getElementById("hipotenusa").innerHTML = hipotenusa;
}

function limpiar() {
    document.getElementById("lado1").value = "";
    document.getElementById("lado2").value = "";
    document.getElementById("hipotenusa").innerHTML = "";
}
