window.onload = () => {
    document.onmousemove = (mouse) => {
        let x = mouse.clientX;
        let y = mouse.clientY;

        let resultado = `El mouse se encuentra en la posiciones de x= ${x} y de y= ${y}`;
        document.getElementById("resultado").innerHTML = resultado
    }
}
