function suma(...num) {
    let suma = 0;

    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }

    return suma;
}

function llamarFuncion() {
    let cadena = document.getElementById("numeros").value.split(" ");
    let soloNumeros = [];

    for (let i = 0; i < cadena.length; i++) {
        let numero = parseInt(cadena[i]);
        // NOTE: 'NaN' representa "No es un número" en JavaScript y se utiliza para valores no numéricos
        if (!isNaN(numero)) {
            soloNumeros.push(numero);
        }
    }
    
    document.getElementById("resultado").innerHTML = suma(...soloNumeros);
}

function limpiar() {
    document.getElementById("numeros").value = "";
    document.getElementById("resultado").innerHTML = "";
}
