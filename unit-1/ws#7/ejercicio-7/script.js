let cont = 3;

function combineAllArrays(...arrays) {
    let aux = [];
    for (let i = 0; i < arrays.length;i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            aux.push(arrays[i][j]);
        }
    }

    return aux;
}

function llamarFuncion() {
    let array1 = document.getElementById("array1").value.split(" ");
    let array2 = document.getElementById("array2").value.split(" ");

    let resultado = combineAllArrays(array1, array2);

    document.getElementById("resultado").innerHTML = `[ ${resultado} ]`;
}

function limpiar() {
    document.getElementById("array1").value = "";
    document.getElementById("array2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function agregarArray(){
}

// NOTE: intentar hacer funcionar funcion de agregarArray
