window.onload = () => {
    tabla();
    dibujar();
}

function tabla() {
    let tabla = "<table id=tabla cellspacing = 0 cellpadding = 10 border = 1>"

    for (let i = 0; i < 10; i++) {
        tabla += "<tr>"
        for (let j = 0; j < 10; j++) {
            tabla += "<td>" + "  " + "</td>"
        }
        tabla += "</tr>"
    }

    document.getElementById("resultado").innerHTML = tabla
}

function dibujar() {
    let miTabla = document.getElementById("tabla");

    miTabla.onmousemove = function(color) {
        // tecla ctrl boolean
        if (color.ctrlKey) {
            color.target.style.backgroundColor = "red";
            // tecla shift boolean
        } else if (color.shiftKey) {
            color.target.style.backgroundColor = "blue";
        }
    };
}

// NOTE: target sirve para manipular el elemento que causo el evento (en este caso la celda <td>)
