window.onload = () => {
    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        // Evita que el formulario se envíe automáticamente.
        e.preventDefault();


    let campoMayuscula = document.getElementById("mayuscula").value;
    let campoCaracteresEspeciales = document.getElementById("caracteresEspeciales").value;
    let campoCorreo = document.getElementById("correo").value;
    let campoTarjetaCredito = document.getElementById("tarjetaCredito").value;
    let campoLongitud = document.getElementById("longitud").value;
    let campoNumero = document.getElementById("numero").value;

    if (validarMayuscula(campoMayuscula)){
            alert("Campo con mayúsculas");
        } else {
            alert("Campo sin mayúsculas");
        }
    });
}

function validarMayuscula(parametro) {
    const regex = /[A-Z]/;
    return regex.test(parametro);
}

function validarCaracteresEspeciales(parametro) {
    const regex = /[!@#$%^&]/;
    return regex.test(parametro);
}

function validarCorreo(parametro) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(parametro);
}

function validarTarjetaCredito(parametro) {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(parametro);
}

function validarLongitud(parametro) {
    return parametro.length >= 8;
}

function validarNumero(parametro) {
    const regex = /\d/;
    return regex.test(parametro);
}

