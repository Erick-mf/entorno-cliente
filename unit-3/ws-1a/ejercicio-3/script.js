/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 *
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
function getBiggestNumber(numbers) {
    // return Math.max(...numbers);
    let mayor = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > mayor) {
            mayor = numbers[i];
        }
    }
    return mayor;
}

/**
 *@name limpiarPantalla
 *@description Limpia la pantalla, restableciendo los campos de entrada y los resultados.
 */
function limpiarPantalla() {
    document.getElementById('numeros').value = '';
    document.getElementById('resultado').innerHTML = '';
}

/**
 *@namme llamarFuncion
 *@description Obtiene una lista de números ingresados como texto separados por espacios y los convierte a números.
 * @returns {number} El resultado de la funcion getBiggestNumber
 */
function llamarFuncion() {
    let entrada = document.getElementById('numeros').value.trim();

    let numeros = entrada.split(' ');

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }

    document.getElementById('resultado').innerHTML = getBiggestNumber(numeros);
}
