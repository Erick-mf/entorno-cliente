/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 *
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */
function getPercentage(number, percentage) {
    return (number * percentage) / 100;
}

/**
 *@name limpiarPantalla
 *@description Limpia la pantalla, restableciendo los campos de entrada y los resultados.
 */
function limpiarPantalla() {
    document.getElementById('numero').value = '';
    document.getElementById('porcentaje').value = '';
    document.getElementById('resultado').innerHTML = '';
}

/**
 * @name lanzarFuncion
 * @description Obtiene los valores de número y porcentaje desde la entrada de usuario y muestra el resultado de la
 * función getPercentage
 */
function lanzarFuncion() {
    let numero = parseInt(document.getElementById('numero').value);
    let porcentaje = parseInt(document.getElementById('porcentaje').value);

    document.getElementById('resultado').innerHTML = getPercentage(numero, porcentaje);
}
