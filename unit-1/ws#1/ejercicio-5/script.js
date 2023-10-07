let num1 = parseInt(prompt("Ingrese el primer número "));
let num2 = parseInt(prompt("Ingrese el segundo número "));

const suma = () => {
    return num1 + num2
}

const resta = () => {
    return num1 - num2
}

const multiplicacion = () => {
    return num1 * num2
}

const division = () => {
    let resultado
    if (num2 === 0){
        resultado = "El segundo número no puede ser cero"
    } else {
        resultado = num1 / num2
    }
    return resultado;
}

let mensaje = `El valor de la primer y segunda variable es ${num1} y ${num2}, \n
    y el resultado de las principales operaciónes matemáticas son: 
    suma: ${suma()}, resta: ${resta()}, multiplicación: ${multiplicacion()} y
    la división: ${division()}`

alert(mensaje)
