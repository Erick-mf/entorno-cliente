const img1 = "./img/fondo.jpeg";
const img2 = "./img/astronauta.webp";
const img3 = "./img/foto-saitama.jpg";
let imagenes = [img1, img2, img3];
let indiceImagenActual = 0;

window.onload = () => {
    document.getElementById("siguiente").addEventListener("click", siguienteImagen);
    document.getElementById("anterior").addEventListener("click", anteriorImagen);
    mostrarImagen();
};

function mostrarImagen() {
    let img = document.getElementById("resultado");
    img.src = imagenes[indiceImagenActual];
}

function siguienteImagen() {
    indiceImagenActual++;
    if (indiceImagenActual >= imagenes.length) {
        indiceImagenActual = 0;
    }
    mostrarImagen();
}

function anteriorImagen() {
    indiceImagenActual--;
    if (indiceImagenActual < 0) {
        indiceImagenActual = imagenes.length - 1;
    }
    mostrarImagen();
}
