let numero = parseInt(prompt("Ingrese un número"));

if (numero > 100){
    document.write("Debe ingresar un número menor que 100")
} else {
    for (let i =numero; i<=100; i++){
        document.write(i + "<br>");
    }
}

