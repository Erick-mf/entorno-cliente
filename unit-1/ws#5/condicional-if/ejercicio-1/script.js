function esPar(){
    // .getElementById se usa para obtener un elemento por su id
    // y .value devuelve el valor del input
const numero = document.getElementById("numero").value;

const resultado = numero % 2 === 0 ? "par" : "impar";

document.write(`<p>El número ${numero} es ${resultado}.</p>`);
document.write(`<a href="index.html">Volver</a>`);
}
