window.onload = function () {
    let enlaces = document.getElementsByTagName("a");
    let numEnlaces = enlaces.length;
    let penultimoEnlace = enlaces[numEnlaces - 2].href;
    let enlacesAGoogle = Array.from(enlaces).filter((enlace) => enlace.href === "https://www.google.com/");
    let numEnlacesAGoogle = enlacesAGoogle.length;
    let enlacesTercerParrafo = document.getElementById("parrafo3").getElementsByTagName("a").length;

    console.log("Número de enlaces en la página: " + numEnlaces);
    console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace);
    console.log("Número de enlaces que enlazan a Google: " + numEnlacesAGoogle);
    console.log("Número de enlaces del tercer párrafo: " + enlacesTercerParrafo);
};
