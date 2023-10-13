function calcularSuma(...num) {
    let suma = 0;

    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }

    return suma;
}

function llamarCalcSuma() {
    let numeros = document.getElementById("numeros").value.split(" ");

    // convertir los strings a numeros
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }

// NOTE: no olvida utilizar el operador spread (...) para pasar los números como argumentos separados
    document.getElementById("resultado").innerHTML = calcularSuma(...numeros);
    console.log(calcularSuma(...numeros));
}

function limpiar() {
    document.getElementById("numeros").value = "";
    document.getElementById("resultado").innerHTML = "";
}

// FIX: la suma de 1,2,3,4,5,6,7,8,9 y 10 no da 55
