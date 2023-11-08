window.onload = function () {
    // Obtén los elementos del DOM
    let leftPaddle = document.getElementById("left-paddle");
    let rightPaddle = document.getElementById("right-paddle");
    let ball = document.getElementById("ball");

    // Variables para la velocidad y la dirección de la bola
    let ballSpeedX = 2;
    let ballSpeedY = 2;

    // Variables para la velocidad de las paletas
    let paddleSpeed = 5;

    // Función para actualizar la posición de la bola

    function updateBall() {
        let ballRect = ball.getBoundingClientRect();

        // Actualiza la posición de la bola
        ball.style.left = ballRect.left + ballSpeedX + "px";
        ball.style.top = ballRect.top + ballSpeedY + "px";

        // Invierte la dirección de la bola si choca con una pared
        if (ballRect.left < 0 || ballRect.right > window.innerWidth) {
            ballSpeedX *= -1;
        }
        if (ballRect.top < 0 || ballRect.bottom > window.innerHeight) {
            ballSpeedY *= -1;
        }
    }

    // Función para actualizar la posición de las paletas
    function updatePaddle(e) {
        let leftPaddleRect = leftPaddle.getBoundingClientRect();
        let rightPaddleRect = rightPaddle.getBoundingClientRect();
        let containerRect = document.getElementById("section3").getBoundingClientRect();

        // Mueve las paletas hacia arriba o hacia abajo dependiendo de la tecla presionada
        if (e.key === "w" && leftPaddleRect.top > containerRect.top) {
            leftPaddle.style.top = leftPaddleRect.top - paddleSpeed + "px";
        } else if (e.key === "s" && leftPaddleRect.bottom < containerRect.bottom) {
            leftPaddle.style.top = leftPaddleRect.top + paddleSpeed + "px";
        }

        if (e.key === "ArrowUp" && rightPaddleRect.top > containerRect.top) {
            rightPaddle.style.top = rightPaddleRect.top - paddleSpeed + "px";
        } else if (e.key === "ArrowDown" && rightPaddleRect.bottom < containerRect.bottom) {
            rightPaddle.style.top = rightPaddleRect.top + paddleSpeed + "px";
        }
    }

    // Escucha los eventos del teclado
    window.addEventListener("keydown", updatePaddle);

    // Actualiza la posición de la bola cada 10 milisegundos
    setInterval(updateBall, 10);
};
