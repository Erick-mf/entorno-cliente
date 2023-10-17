function palindromo() {
    let palabra = document.getElementById("palabra").value;
    let aux = palabra.split("").reverse().join("");

    if (palabra === aux) {
        document.getElementById("resultado").innerHTML = "Es palindromo";
    } else {
        document.getElementById("resultado").innerHTML = "No es palindromo";
    }
}

function limpiar() {
    document.getElementById("palabra").value = "";
    document.getElementById("resultado").innerHTML = "";
}
