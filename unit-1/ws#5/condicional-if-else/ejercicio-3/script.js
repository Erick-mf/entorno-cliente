function estudiar() {
    const edad = document.getElementById("edad").value;
    let mensaje = "";

    if (edad <= 5) {
        mensaje = "Debe estudiar en el jardin de infacia"
    } else if (edad >= 6 && edad <=11){
        mensaje = "Debe estudiar en primaria"
    } else if (edad >= 12 && edad <=16){
       mensaje = "Debe estudiar en la ESO" 
    } else if (edad >= 17 && edad <=21){
        mensaje = "Debe estudiar en bachillerato/ciclo"
    } else {
        mensaje = "Debe estudiar en la universidad"
    }
    alert(mensaje)
}
