function sumEveryOther(args) {
    let suma = 0;

    for (let i = 0; i < args.length; i += 2) {
        suma += args[i];
    }

    return suma;
}

function llamarFuncion() {
    let args = document.getElementById("args").value.split(" ");
    let aux = [];

    for (let i = 0; i < args.length; i++) {
        aux.push(parseInt(args[i]));
    }

    let resultado = sumEveryOther(aux);

    document.getElementById("resultado").innerHTML = resultado;
}

function limpiar() {
    document.getElementById("args").value = "";
    document.getElementById("resultado").innerHTML = "";
}
