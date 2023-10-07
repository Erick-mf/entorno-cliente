let num1 = parseInt(prompt("Ingresar el primer número:"));
let num2 = parseInt(prompt("Ingresar el segundo número:"));

let resultado
if (num1 > num2) {
    resultado = `El número ${num1} es mayor que el número ${num2}`
} else if (num1 < num2) {
    resultado = `El número ${num1} es menor que el número ${num2}`
} else {
    resultado = `Los numeros ${num1} y ${num2} son iguales`
}

alert(resultado)
