function numRandom() {
    document.write(Math.random());
}

function numRandom2() {
    document.write(Math.floor(Math.random() * 100) + 101);
    document.write("<br> <a href='index.html'>Volver</a>");
}

let min = document.getElementById("min").value;
let max = document.getElementById("max").value;

function randomMinMax() {
    parseInt(min);
    parseInt(max);

    document.write(Math.floor(Math.random() * (max - min + 1) + min));
    document.write("<br> <a href='index.html'>Volver</a>");
}
