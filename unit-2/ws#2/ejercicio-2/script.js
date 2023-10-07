function calcular() {
    const angulo = parseInt(document.getElementById("angulo").value);
    let radianes = angulo * Math.PI / 180;

    let seno = Math.sin(radianes);
    let coseno = Math.cos(radianes);
    let tangente = Math.tan(radianes);

    let resultado = "Seno: " + seno + ", Coseno: " + coseno + ", Tangente: " + tangente;

    return document.getElementById("resultado").innerHTML = resultado;
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("angulo").value = "";
}
