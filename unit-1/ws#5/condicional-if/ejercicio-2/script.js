function esMayorDeEdad() {
    const edad = document.getElementById("edad").value;

    const resultado = edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";

    document.write(resultado + '<br>');
    document.write('<a href="index.html">volver</a>')
}
