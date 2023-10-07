function mayusMinus() {
    let frase = document.getElementById("frase").value;
    let mayus = 0;
    let minus = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === frase[i].toUpperCase()) {
            mayus++;
        } else {
            minus++;
        }
    }
    return document.getElementById("resultado").innerHTML = "Hay " + mayus + " mayúsculas y " + minus + " minúsculas";
}

function limpiar() {
    document.getElementById("frase").value = "";
    document.getElementById("resultado").innerHTML = "";
}
