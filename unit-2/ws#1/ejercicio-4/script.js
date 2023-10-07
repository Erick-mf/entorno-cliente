let temporizador = (tiempo) => {
    if (tiempo > 0) {
        setTimeout(() => {
            document.write(tiempo);
            tiempo--;
            temporizador(tiempo);
        }, 1000);
    } else {
        location.assign("https://google.com")
    }
};

