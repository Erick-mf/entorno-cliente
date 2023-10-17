function contPalabras(){
    let cadena = document.getElementById("cadena").value.trim().replace(/\s+/g, ' ');

    let palabras = cadena.split(' ');
    let conteo = palabras.length;

    let resultado = "Cantidad de palabras: " + conteo;

    return document.getElementById("resultado").innerHTML = resultado;
}

function limpiar(){
    document.getElementById("palabras").value = "";
    document.getElementById("resultado").innerHTML = "";
}
