function mostrar() {
    const nombre = document.getElementById("nombre").value.toLowerCase();
    const apellidos = document.getElementById("apellidos").value.toLowerCase();

    if (nombre != "ricardo") {
        document.write(nombre + " " + apellidos + "<br>");
        document.write("<a href='index.html'>volver</a>");
    } else {
        alert(`Bienvenido ${nombre} ${apellidos}`);
    }
}
