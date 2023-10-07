function mostrar(){
    let frase = document.getElementById("frase").value;
    let vocales = "";
    let consonantes = "";
    let resultado = "";

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
            vocales += frase[i];
        } else {
            consonantes += frase[i];
        }
    }

    resultado = consonantes + vocales;
    return console.log(resultado);
}
