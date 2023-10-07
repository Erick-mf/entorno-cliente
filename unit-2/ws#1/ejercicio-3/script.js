let temporizador = (tiempo) => {
    if (tiempo > 0) {
        setTimeout(() => {
            document.write(tiempo + "<br>");
            tiempo--;
            temporizador(tiempo);
        }, 1000);
    } else {
        document.write("No se pueden ingrear 0 segundos <br>");
        document.write(`<a href="index.html">Volver<a/>`)
    }
};

