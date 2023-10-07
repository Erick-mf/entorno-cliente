let resultado = 0;
const hermanos = document.getElementById("hermanos").value;
const cantidad = document.getElementById("cantidad").value;
function calcular() {

    if (hermanos > 3 ){
        resultado = cantidad * 0.15 
    }else if (hermanos >0 && hermanos <= 3 ){
        resultado = cantidad * 0.05
    } else {
        resultado = cantidad
    }
    return console.log(`Tienes un descuento de ${resultado}`);}

