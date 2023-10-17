function compararCadena(cad1, cad2) {
    let aux = "no es una subcadena de la cadena 1";
    let posicion = -1;

    posicion = cad1.indexOf(cad2);
        if (posicion !== -1)  {
            aux = "si es una subcadena de la cadena 1 y comienza en la posición " + posicion;
        }

    return aux;
}

function llamarFuncion() {
    let cadena = document.getElementById("cadena").value.replace(/\s+/g, ' ').trim(); // expresion regular para eliminar los espacion dobles o mas
    let cadena2 = document.getElementById("cadena2").value.replace(/\s+/g, ' ').trim();

    let resultado = compararCadena(cadena, cadena2);

    document.getElementById("resultado").innerHTML = resultado;

}

function limpiar() {
    document.getElementById("cadena").value = "";
    document.getElementById("cadena2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
