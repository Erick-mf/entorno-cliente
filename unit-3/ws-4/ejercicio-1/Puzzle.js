class Puzzle {
    constructor(tamanio) {
        this.tamanio = tamanio;
        this.tablero = this.crearTablero();
        this.solucion = this.solucion();
        this.mostrarTablero();
        this.posicionesAleatorias();
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

    mostrarTablero() {
        for (let i = 0; i < this.tamanio; i++) {
            let fila = "";
            for (let j = 0; j < this.tamanio; j++) {
                fila += this.tablero[i][j] + "    ";
            }
            console.log(fila);
        }
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

    posicionesAleatorias() {
        console.log("cambiarPosiciones");
        for (let i = 0; i < this.tamanio; i++) {
            for (let j = 0; j < this.tamanio; j++) {
                let posNueva = Math.floor(Math.random() * this.tamanio);
                let posNueva2 = Math.floor(Math.random() * this.tamanio);

                let aux = this.tablero[i][j];
                this.tablero[i][j] = this.tablero[posNueva][posNueva2];
                this.tablero[posNueva][posNueva2] = aux;
            }
        }
    }

    moverEspacio(movimiento) {
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

        if (nuevoI >= 0 && nuevoI < this.tamanio && nuevoJ >= 0 && nuevoJ < this.tamanio) {
            [this.tablero[espacioI][espacioJ], this.tablero[nuevoI][nuevoJ]] = [this.tablero[nuevoI][nuevoJ], this.tablero[espacioI][espacioJ]];
        } else {
            console.log('Movimiento no válido');
        }
    }
}

let tablero = new Puzzle(4);
tablero.mostrarTablero();
console.log(tablero.revisarSolucion());

