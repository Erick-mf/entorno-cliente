let resultado;

/**
 * @name isOdd
 * @description Devuelve si un número es impar
 *
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 */
function isOdd(x) {
    if (x % 2 === 0) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}

/**
*@name tratarEvento
@description Llama a la función isOdd e imprime su resultado
*
*/
function tratarEvento() {
    document.getElementById('resultado').innerHTML = isOdd(parseInt(document.getElementById('numero').value));
}

/**
 *@name Limpiar
 *@description Limpia los campos con id "numero" y "resultado" en el HTML
 */
function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}
