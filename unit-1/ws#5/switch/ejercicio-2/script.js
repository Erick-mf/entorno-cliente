let numero = parseInt(prompt("Ingrese un número:"));

let mod_de_dos = numero % 2;
let mod_de_tres = numero % 3;
let mod_de_cinco = numero % 5;

switch(true){
    case (mod_de_dos === 0):
        console.log("El número es par");
        break;
    case (mod_de_tres === 0):
        console.log("El número es múltiplo de tres");
        break;
    case (mod_de_cinco === 0):
        console.log("El número es múltiplo de cinco");
        break;
    default:
        alert("No es un número par ni múltiplo de tres ni de cinco");
}
