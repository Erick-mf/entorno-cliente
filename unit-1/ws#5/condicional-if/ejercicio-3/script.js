function saludo() {
    const edad = document.getElementById("edad").value; 
    const localidad = document.getElementById("localidad").value.toLowerCase();

    const resultado = (edad >= 25 && localidad == "madrid") ? "Enhorabuena!!!" : "Lo siento, sigue intentando";

    document.write(resultado + '<br>');
    document.write('<a href="index.html">volver</a>')
}
