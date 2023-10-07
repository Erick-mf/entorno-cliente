let nota = parseInt(prompt("Ingrese una nota:"));

let resultado
if (nota < 5){
    resultado = "suspenso"
} else if (nota === 5){
    resultado = "aprobado"
} else if (nota >5 && nota <8){
    resultado = "notable"
} else {
    resultado = "sobresaliente"
}

alert(resultado);
