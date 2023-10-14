function combineTwoArrays(array1, array2) {
    let aux = [];

    aux = [...array1, ...array2];
    
    console.log(aux);
    return aux;
}

function llamarFuncion() {
    let array1 = document.getElementById("array1").value.split(" ");
    let array2 = document.getElementById("array2").value.split(" ");

    let resultado = combineTwoArrays(array1, array2);

    document.getElementById("resultado").innerHTML = `Array combinado: [${resultado}]`;
}

function limpiar() {
    document.getElementById("array1").value = "";
    document.getElementById("array2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
