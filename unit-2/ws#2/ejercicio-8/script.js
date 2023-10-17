let img1 = "<img src='./img/img1.webp'>";
let img2 = "<img src='./img/img2.jpeg'>";
let img3 = "<img src='./img/img3.jpg'>";

let aux = Math.floor(Math.random() * 3) + 1;

switch (aux) {
    case 1:
        document.getElementById("resultado").innerHTML = img1;
        break;
    case 2:
        document.getElementById("resultado").innerHTML = img2;
        break;
    case 3:
        document.getElementById("resultado").innerHTML = img3;
        break;
}
