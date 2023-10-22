class Puzzle {
    constructor(tamanio) {
        this.tamanio = tamanio;
        this.tablero = this.crearTablero();
        this.solucion = this.solucion();
        this.historial = [];
        this.dibujar();
        this.tiempoInicio = null;
    }

    crearTablero() {
        let tablero = [];
        let num = 1;

        for (let i = 0; i < this.tamanio; i++) {
            let fila = [];
            for (let j = 0; j < this.tamanio; j++) {
                if (i === this.tamanio - 1 && j === this.tamanio - 1) {
                    fila.push(" ");
                } else {
                    fila.push(num);
                    num++
                }
            }
            tablero.push(fila)
        }
        return tablero;
    }

    dibujar() {
        let tabla = "<table cellpadding=10 cellspacing=0 border=1px>";

        for (let i = 0; i < this.tamanio; i++) {
            tabla += "<tr align=center>";
            for (let j = 0; j < this.tamanio; j++) {
                tabla += "<td>" + this.tablero[i][j] + "</td>";
            }
            tabla += "</tr>";
        }
        tabla += "</table>";

        document.getElementById("tablero").innerHTML = tabla;
    }

    posicionesAleatorias() {
        this.historial = [];
        let movimientos = ['arriba', 'abajo', 'izquierda', 'derecha'];

        for (let i = 0; i < this.tamanio * this.tamanio; i++) {
            let movimiento;
            do {
                movimiento = movimientos[Math.floor(Math.random() * movimientos.length)];
            } while (!this.moverEspacio(movimiento));
            this.historial.push(movimiento);
        }
        // inicia el cronometro
        this.tiempoInicio = Date.now();
    }

    solucion() {
        let solucion = [];
        for (let i = 0; i < this.tablero.length; i++) {
            solucion[i] = [...this.tablero[i]];
        }
        return solucion;
    }

    revisarSolucion() {
        for (let i = 0; i < this.tamanio; i++) {
            for (let j = 0; j < this.tamanio; j++) {
                if (this.tablero[i][j] !== this.solucion[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    moverEspacio(movimiento) {
        // esto es para detectar los indices donde esta el " "
        let espacioI, espacioJ;
        for (let i = 0; i < this.tamanio; i++) {
            for (let j = 0; j < this.tamanio; j++) {
                if (this.tablero[i][j] === " ") {
                    espacioI = i;
                    espacioJ = j;
                    break;
                }
            }
        }

        let nuevoI = espacioI + (movimiento === 'arriba' ? -1 : movimiento === 'abajo' ? 1 : 0);
        let nuevoJ = espacioJ + (movimiento === 'izquierda' ? -1 : movimiento === 'derecha' ? 1 : 0);

        // se comprueba si el movimiento es válido
        if (nuevoI >= 0 && nuevoI < this.tamanio && nuevoJ >= 0 && nuevoJ < this.tamanio) {
            [this.tablero[espacioI][espacioJ], this.tablero[nuevoI][nuevoJ]] = [this.tablero[nuevoI][nuevoJ], this.tablero[espacioI][espacioJ]];

            this.dibujar();

            // // comprueba si el tablero está resuelto después de cada movimiento
            if (this.revisarSolucion()) {
                // Si el juego está resuelto, calcula el tiempo que tomó resolverlo
                if (this.tiempoInicio) {
                    let tiempoFinal = Date.now();
                    let tiempoTotal = tiempoFinal - this.tiempoInicio;
                    console.log(`¡Felicidades! Has resuelto el puzzle en ${tiempoTotal / 1000} segundos.`);
                }
            }
            // es movimiento es valido
            return true;
        } else {
            // El movimiento no fue válido
            return false;
        }
    }
}

let tablero;
function crear() {
    let num = document.getElementById("tamanio").value;
    tablero = new Puzzle(num);
}

function empezar() {
    tablero.posicionesAleatorias();
    tablero.dibujar();
}

function verSolucion() {
    document.getElementById("solucion").innerHTML = `Movimientos: ${tablero.historial.reverse()}`;
}

function limpiar() {
    document.getElementById("tamanio").value = "";
    document.getElementById("tablero").innerHTML = "";
    document.getElementById("solucion").innerHTML = "";
}

