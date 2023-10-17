function calcularSenos() {
    let numFilas = document.getElementById('filas').value;
    let tabla = "<table><tr><th>Número</th><th>Seno</th></tr>";

    // Genera las nuevas filas
    for (let i = 1; i <= numFilas; i++) {
        tabla+= `<tr><td>${i}</td><td>${Math.sin(i).toFixed(2)}</td></tr>`;
    }
    tabla+="</table"

    document.getElementById('resultado').innerHTML = tabla;
}

function limpiar() {
    document.getElementById("filas").value = "";
    document.getElementById("resultado").innerHTML = "";
}
