function longitudPalabra() {
    let cadena = document.getElementById("cadena").value;
    let aux = cadena.split(" ");
    let longitudPalabra = 0
    let palabra = ""

    for (let i = 0; i < aux.length; i++) {
        if (aux[i].length > longitudPalabra) {
            longitudPalabra = aux[i].length;
            palabra = aux[i];
        }
    }

    return document.getElementById("resultado").innerHTML = palabra + " tiene una longitud de " + longitudPalabra;
}

function longitudPalabra2() {
    let cadena = document.getElementById("cadena").value;
    let longitud = document.getElementById("longitud").value;
    let aux = cadena.split(" ");
    let longitudPalabra = 0
    let palabra = ""
    let contPalabra = 0

    for (let i = 0; i < aux.length; i++) {
        if (aux[i].length > longitud) {
            longitudPalabra = aux[i].length;
            palabra = aux[i];
            contPalabra++
        }
    }

    return document.getElementById("resultado2").innerHTML = `Para la longitud de ${longitud} hay ${contPalabra} palabras con longitud mayor`;
}

function limpiar(){
    document.getElementById("cadena").value = "";
    document.getElementById("longitud").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
}

function longitudPalabras(){
    return longitudPalabra(), longitudPalabra2();
}
