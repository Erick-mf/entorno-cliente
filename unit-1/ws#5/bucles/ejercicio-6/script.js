let numero = parseInt(prompt("Ingrese un nùmero"));
let tabla = 0;

for (let i = 1; i <= 10; i++) {
    tabla = numero * i;
    document.write(`<h2>${i} x ${numero} = ${tabla}</h2>`);
}
