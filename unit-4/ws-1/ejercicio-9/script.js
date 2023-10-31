window.onload = () => {
    moverImg();
}

function moverImg() {
    let imagen = document.getElementById("img");
    let isClickPresionado = false;
    let posicionX, posicionY;

    imagen.addEventListener("click", (e) => {
        isClickPresionado = !isClickPresionado;
        posicionX = e.clientX - imagen.getBoundingClientRect().left;
        posicionY = e.clientY - imagen.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
        if (isClickPresionado) {
            imagen.style.left = e.clientX - posicionX + "px";
            imagen.style.top = e.clientY - posicionY + "px";
        }
    });

    // imagen.addEventListener("mouseup", () => {
    //     isClickPresionado = false;
    // });
}

/*NOTE: mousedown: Este evento se dispara cuando se hace clic
        mousemove: Se dispara cuando se mueve el ratón
        mouseup: Se dispara cuando se suelta el botón del ratón
        getBoundingClientReact(): para obtener el tamaño y la posición de un elemento en el DOM(https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect)
*/
