function tabla() {
    // Obtiene el valor del elemento con id "palabra", lo convierte en un array de caracteres y lo almacena en la variable "palabra".
    let palabra = document.getElementById("palabra").value.split("");
    // Inicializa una cadena vacía "tabla" para almacenar el código HTML de la tabla.
    let tabla = "";

    // Recorre cada carácter de la "palabra".
    for (let i = 0; i < palabra.length; i++) {
        // Añade el inicio de una fila a la "tabla".
        tabla += "<tr>";
        // Recorre cada carácter de la "palabra" para cada fila.
        for (let j = 0; j < palabra.length; j++) {
            // Si estamos en la primera fila, añade el carácter en la posición "j" a la "tabla".
            if (i == 0) {
                tabla += "<td>" + palabra[j] + "</td>";
            } 
            // Si estamos en la última fila, añade el carácter en la posición inversa a la "tabla".
            else if (i == palabra.length - 1) {
                tabla += "<td>" + palabra[palabra.length - 1 - j] + "</td>";
            } 
            // Si estamos en la primera columna, añade el carácter en la posición "i" a la "tabla".
            else if (j == 0) {
                tabla += "<td>" + palabra[i] + "</td>";
            } 
            // Si estamos en la última columna, añade el carácter en la posición inversa a la "tabla".
            else if (j == palabra.length - 1) {
                tabla += "<td>" + palabra[palabra.length - 1 - i] + "</td>";
            } 
            // Para todas las demás celdas, añade un espacio vacío a la "tabla".
            else {
                tabla += "<td> </td>";
            }
        }
        // Añade el final de una fila a la "tabla".
        tabla += "</tr>";
    }

    // Asigna el código HTML almacenado en "tabla" al elemento con id "resultado" y lo devuelve.
    return document.getElementById("resultado").innerHTML = tabla;
}

function limpiar() {
    document.getElementById("palabra").value = "";
    document.getElementById("resultado").innerHTML = "";
}
