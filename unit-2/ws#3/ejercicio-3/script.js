function subCadena() {
    let cadena = document.getElementById("cadena").value.split(" ");
    let subCadena = document.getElementById("subCadena").value;
    let cont = 0

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === subCadena) {
            cont++;
        }
    }

    return document.getElementById("resultado").innerHTML = `Hay ${cont} apariciones de la subcadena \"${subCadena}\" en la cadena \"${cadena}\"`;
}

function limpiar() {
    document.getElementById("cadena").value = "";
    document.getElementById("subCadena").value = "";
    document.getElementById("resultado").innerHTML = "";
}
