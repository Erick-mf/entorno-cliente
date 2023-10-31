window.onload = () => {
    let usuario = leerCookie("usuario");
    if (usuario != "") {
        document.getElementById("resultado").innerHTML = "Hola " + usuario;
    } else {
        usuario = prompt("Por favor introduce tu nombre:", "");
        if (usuario != "" && usuario != null) {
            crearCookie("usuario", usuario, 5);
            document.getElementById("resultado").innerHTML = "Hola " + usuario;
        }
    }

    let btn = document.getElementById("cerrarSesion");
    btn.onclick = () => {
        borrarCookie("usuario");
    };
};

function crearCookie(nombre, valor, minutos) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + minutos * 60 * 1000);
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + encodeURIComponent(valor) + ";" + expira + ";path=/";
}

function leerCookie(nombre) {
    let nombreCookie = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombreCookie) == 0) {
            return c.substring(nombreCookie.length, c.length);
        }
    }
    return "";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
