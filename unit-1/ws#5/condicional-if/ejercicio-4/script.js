function calcular() {
    const cantidad = document.getElementById("cantidad").value;

    const resultado = cantidad > 100 ? (cantidad * 0.10) : "Cantidad insuficiente para el descuento";

    document.write(resultado + "<br>")
    document.write("<a href='index.html'>volver</a>")
}
