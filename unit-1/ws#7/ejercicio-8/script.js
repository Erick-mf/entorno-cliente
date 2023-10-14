function squareAndSum(...args) {
    let suma = 0;

    for (let i = 0; i < args.length; i++) {
       suma += Math.pow(args[i], 2);
    }

    return suma;
}

function llamarFuncion() {
    let nums = document.getElementById("num").value.split(" ");
    let aux = [];

    for (let i = 0; i < nums.length; i++) {
        aux.push(parseInt(nums[i]));
    }

    let resultado = squareAndSum(...aux);

    document.getElementById("resultado").innerHTML = resultado;
}

function limpiar() {
    document.getElementById("num").value = "";
    document.getElementById("resultado").innerHTML = "";
}
