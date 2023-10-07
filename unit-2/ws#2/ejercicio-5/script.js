function calcular() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let discriminante = (b * b) - (4 * a * c);

    if (discriminante < 0) {
        return document.getElementById("resultado").innerHTML = "No tiene soluciones reales";
    } else if (discriminante === 0) {
        let respueta = -b / (2 * a);
        return document.getElementById("resultado").innerHTML = "La solución es: " + respueta;
    } else {
        let respuesta1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let respuesta2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        let resultado = document.getElementById("resultado").innerHTML = "La solución es: " + respuesta1 + " y " + respuesta2;

        return resultado
    }
}

function limpiar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("resultado").innerHTML = "";
}
