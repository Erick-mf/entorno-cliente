function onlyUniques(valores) {
    let aux = [];

    for (let i = 0; i < valores.length; i++) {
        if (!aux.includes(valores[i])) {
            aux.push(valores[i]);
        }
    }
    return aux;
}

function llamarFuncion() {
    let valores = document.getElementById("valores").value.split(" ");

    let resulttado = onlyUniques(valores);
    
    document.getElementById("resultado").innerHTML = `[ ${resulttado} ]`
}

function limpuar() {
    document.getElementById("valores").value = "";
    document.getElementById("resultado").innerHTML = "";
}
