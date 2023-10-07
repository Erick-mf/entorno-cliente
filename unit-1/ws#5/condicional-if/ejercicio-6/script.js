function carnet() {
    const localidad = document.getElementById("localidad").value.toLowerCase();
    const edad = document.getElementById("edad").value;

    if ((edad >= 18 && edad <=30) && localidad == "madrid") {
        alert("Puede acceder al carnet de emprendedores");
    } else {
        alert("No puede acceder al carnet de emprendedores");
    }
}
