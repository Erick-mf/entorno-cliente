let suma = 0;

for (let i = 0; i < 10; i++) {
    let numeros = parseInt(prompt("Ingrear numeros"));
    suma += numeros;
}
document.write(`<h2>${suma}</h2>`);
