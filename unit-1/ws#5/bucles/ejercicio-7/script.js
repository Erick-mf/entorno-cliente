let numero1 = parseInt(prompt("Ingrese un número"));
let numero2;
let fin = false;

while (!fin) {
    numero2 = parseInt(prompt("Ingrese otro número"));

    if (numero1 === numero2) {
        fin = true;
    } else {
        let diferencia = numero1 - numero2;
        if (diferencia < 0) {
            diferencia = -diferencia;
        }

        if (diferencia <= 10) {
            console.log("Estás cerca del número.");
        } else {
            console.log("Te alejas del número.");
        }
    }
}
