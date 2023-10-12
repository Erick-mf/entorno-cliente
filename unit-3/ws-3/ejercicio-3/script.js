let array = new Array(5);
let tabla = "<table cellpadding=10 cellspacing=0 border=1px>";
let resultado = "";
let indice = [];
let cont = 0;

for (let i = 0; i < array.length; i++) {
    array[i] = new Array(5);
    tabla += "<tr align=center>";
    for (let j = 0; j < array[i].length; j++) {
        let bgColor= "white"; // para reestablecer a blanco
        array[i][j] = Math.floor(Math.random() * 45) + 11;
        indice = ([i + 1, j + 1]).join(""); // indice es un string
        if (indice.includes(array[i][j].toString())) {
            cont++;
            bgColor="red";
            console.log(indice + ` coincidencias ${cont}`);
        }
        tabla += `<td bgcolor=${bgColor}>` + "[" + array[i][j] + "]" + "</td>";
    }
    tabla += "</tr>";
}
tabla += "</table>";

document.getElementById("cuadrado").innerHTML = tabla;

if (cont === 0) resultado = "no hay coincidencias";

document.getElementById("resultado").innerHTML = `Coincidencias: ${cont}`;
