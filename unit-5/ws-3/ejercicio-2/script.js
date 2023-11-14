let words = [
    "Valencia",
    "Madrid",
    "Barcelona",
    "Sevilla",
    "Bilbao",
    "Granada",
    "Málaga",
    "Alicante",
    "Córdoba",
    "Zaragoza",
];
let word = words[Math.floor(Math.random() * words.length)];
word = word.toUpperCase();
let wordArray = word.split("");
let linesArray = [];
let lives = 10;
let guessedLetters = [];

window.onload = () => {
    resetGame();
};

function resetGame() {
    linesArray = [];
    lives = 10;
    guessedLetters = [];

    let alphabet = document.getElementById("alphabet");
    alphabet.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = String.fromCharCode(i);
        letterDiv.addEventListener("click", function () {
            checkLetter(this.innerHTML);
        });
        alphabet.appendChild(letterDiv);
    }

    let linesDiv = document.getElementById("lines");
    linesDiv.innerHTML = "";

    for (let i = 0; i < word.length; i++) {
        let lineDiv = document.createElement("div");
        lineDiv.innerHTML = "-";
        linesDiv.appendChild(lineDiv);
        linesArray.push(lineDiv);
    }

    document.getElementById("lives").innerHTML = "You have " + lives + " lives";
}

function checkLetter(letter) {
    if (guessedLetters.includes(letter)) {
        return;
    }
    guessedLetters.push(letter);

    let correct = false;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === letter) {
            linesArray[i].innerHTML = letter;
            correct = true;
        }
    }
    if (!correct) {
        lives--;
        document.getElementById("lives").innerHTML = "You have " + lives + " lives";
        if (lives === 0) {
            alert("Game over");
            resetGame();
        }
    } else {
        let hasWon = linesArray.every(function (lineDiv) {
            return wordArray.includes(lineDiv.innerHTML);
        });
        if (hasWon) {
            alert("Congratulations, you won!");
            resetGame();
        }
    }
}
