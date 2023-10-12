let palabras = "";
let salir = false;

while (!salir) {
   let palabra = prompt("Ingresar una palabra o escribe 'salir' para finalizar").toLowerCase();
    if (palabra === "salir") {
        salir = true;
    } else {
        palabras += palabra + "<br>";
    }
}

document.write(`<h2>${palabras}</h2>`);

