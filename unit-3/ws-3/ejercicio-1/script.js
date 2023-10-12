let array = [1, 2, 3, 4, 5, 6];
let stringArray = ['casa', 'mundo', 'carro', 'ayer', 'camisa', 'ejemplo'];
let nameArray = ['Juan', 'Pedro', 'Javier', 'Maria', 'Jose'];

// Encontrar el número más grande
let max = array.reduce((a, b) => Math.max(a, b));

// Encontrar la cadena más larga
let longest = stringArray.reduce((a, b) => (a.length > b.length ? a : b));

// Encontrar números pares
let even = array.filter((x) => x % 2 === 0);

// Encontrar números impares
let odd = array.filter((x) => x % 2 !== 0);

// Encontrar palabras que contienen 'is'
let containsIs = stringArray.filter((x) => x.includes('is'));

// Afirmar que todos los números son divisibles por tres
let allDivisibleByThree = array.every((x) => x % 3 === 0);

// Unir dos arrays juntos
let array2 = [7, 8, 9];
let joined = array.concat(array2);

// Ordenar el array unido de menor a mayor
let sorted = joined.sort((a, b) => a - b);

// Eliminar la primera palabra en el array
stringArray.shift();

// Colocar una nueva palabra al inicio del array
stringArray.unshift('nuevo');

// Reemplazar algunos elementos (reemplaza el primer elemento por 'reemplazado')
stringArray[0] = 'reemplazado';
