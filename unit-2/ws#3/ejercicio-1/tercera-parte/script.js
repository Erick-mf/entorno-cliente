function cadenaBienFormada() {
    let cadena = document.getElementById("cadena").value.split("");
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        if (i == 0) {
            resultado += cadena[i].toUpperCase();
        } else {
            resultado += cadena[i].toLowerCase();
        }
    }
    document.getElementById("resultado").innerHTML =resultado;
}

function limpiar (){
    document.getElementById("cadena").value = ""
    document.getElementById("resultado").innerHTML = ""

}
