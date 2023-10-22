class TresEnRaya {
    constructor() {
        this.tablero=this.dibujarTablero();
        this.jug1;
        this.jug2;
        this.move = " ";
    }

    dibujarTablero() {
        let tabla = "<table cellspacing=0 cellpadding=30px border=1px>";

        for (let i = 0; i < 3; i++) {
            tabla += "<tr align=center>"
            for (let j = 0; j < 3; j++) {
                tabla += "<td>" + this.move + "</td>";
            }
            tabla += "</tr>"
        }
        tabla += "</table>"

        document.getElementById("tabla").innerHTML = tabla;
    }

    movimiento(x,y){

    }
}

let tablero = new TresEnRaya();
tablero.dibujarTablero();
