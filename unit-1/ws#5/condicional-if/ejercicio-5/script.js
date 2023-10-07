function nombre() {
    const nombre = document.getElementById("nombre").value;

    const nombres = ["pablo", "ana", "eduardo", "clara"]

    if (!nombres.includes(nombre)) {
        alert("El nombre no está en la lista")
    } else {
        if (nombre == "pablo" || nombre == "eduardo") {
            alert("Bienvenido!!!")
        } else {
            alert("Bienvenida!!!")
        }
    }
}
