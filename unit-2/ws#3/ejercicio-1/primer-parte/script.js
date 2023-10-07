
function invertirCadena() {
    let cadena = document.getElementById("cadena").value
    let palabra = document.getElementById("palabra").value

    let resultado = cadena.split('').reverse().join('');
    let resultado2 = palabra.split('').reverse().join('');

    return document.getElementById("resultado").innerHTML = resultado + "<br> " + resultado2
}

function  limpiar() {
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("cadena").value = ""
    document.getElementById("palabra").value = ""
}
