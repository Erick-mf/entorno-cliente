function mostrar() {
    let frase = document.getElementById("frase").value;
    let resultado = "";

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];
        let repetido = false;

        for (let j = 0; j < resultado.length; j++) {
            if (caracter === resultado[j] || caracter === " "){
                repetido = true;
            }
        }

        if (!repetido) {
            resultado += caracter;
        }
    }

    return document.getElementById("resultado").innerHTML = resultado;
}
