/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 *
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */
function inRange(x, min, max) {
    let resultado = false;

    if (min === max) {
        resultado = 'Los limites no pueden ser iguales';
    }

    if (min < max) {
        for (let i = min; i <= max; i++) {
            if (x === i) {
                resultado = true;
            }
        }
    } else {
        for (let i = max; i <= min; i++) {
            if (x === i) {
                resultado = true;
            }
        }
    }
    return resultado;
}

/**
 *@name limpiarPantalla
 *
 *@description Limpia los datos de los inputs y el campo con el id "resultado"
 */
function limpiarPantalla() {
    document.getElementById('numero').value = '';
    document.getElementById('limit_1').value = '';
    document.getElementById('limit_2').value = '';
    document.getElementById('resultado').innerHTML = '';
}

/**
 *@name llamarEvento
 *
 *@description Llama a la función inRange e ingresa los valores de los input del HTML
 *
 *@return Imprime en el campo con el id "resultado" el resultado de la función inRange
 */
function llamarEvento() {
    let num = parseInt(document.getElementById('numero').value);
    let min = parseInt(document.getElementById('limit_1').value);
    let max = parseInt(document.getElementById('limit_2').value);

    document.getElementById('resultado').innerHTML = inRange(num, min, max);
}
