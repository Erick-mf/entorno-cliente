let cards = [
    "<img src='./img/circulo.png'>",
    "<img src='./img/circulo.png'>",
    "<img src='./img/triangulo.png'>",
    "<img src='./img/triangulo.png'>",
    "<img src='./img/cuadrado.png'>",
    "<img src='./img/cuadrado.png'>",
    "<img src='./img/octagono.png'>",
    "<img src='./img/octagono.png'>",
    "<img src='./img/estrella.png'>",
    "<img src='./img/estrella.png'>",
];
cards.sort(() => 0.5 - Math.random());
const img = "<img src='./img/interrogacion.png'>";

let flippedCards = [];
let matchedCards = [];
let startTime;
let timerId;

function startTimer() {
    startTime = Date.now();
    timerId = setInterval(updateTime, 1000);
}

function updateTime() {
    let totalSeconds = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    document.getElementById("time").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

function checkMatch() {
    if (flippedCards[0].innerHTML !== flippedCards[1].innerHTML) {
        setTimeout(() => {
            flippedCards[0].innerHTML = img;
            flippedCards[1].innerHTML = img;
            flippedCards = [];
        }, 1000);
    } else {
        matchedCards.push(...flippedCards);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            clearInterval(timerId);
            alert("Ha ganado!!!");
        }
    }
}

function flipCard(card, i) {
    if (!startTime) {
        startTimer();
    }
    if (flippedCards.length < 2) {
        card.innerHTML = cards[i];
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

window.onload = function () {
    let cardsContainer = document.getElementById("cards");
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = img;
        card.onclick = function () {
            flipCard(card, i);
        };
        cardsContainer.appendChild(card);
    }
};

/*NOTE: padStart() es un método de los objetos de tipo String. Se utiliza para añadir caracteres al 
    principio de una cadena hasta que alcance una longitud determinada
*/
