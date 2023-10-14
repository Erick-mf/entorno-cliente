function countTheArgs(arg) {
    let aux = [];
    let cont = 0;

    for (let i = 0; i < arg.length; i++) {
            if (!aux.includes(arg[i])) {
                aux.push(arg[i]);
                cont++;
        }
    }
    console.log(aux + cont);
    return cont;

}

function llamarFuncion() {
    let valores = document.getElementById("argumentos").value.split(" ");

    let resultado = countTheArgs(valores);

    document.getElementById("resultado").innerHTML = resultado;
}

function limpiar() {
    document.getElementById("argumentos").value = "";
    document.getElementById("resultado").innerHTML = "";
}
