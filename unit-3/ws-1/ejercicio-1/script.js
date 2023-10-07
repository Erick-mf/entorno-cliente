let num1, num2, num3, num4;
let maximo = (num1, num2, num3, num4) =>{
return console.log(Math.max(num1, num2, num3, num4));
}
let cont = 0;

do {
    console.log(`ingresar 4 valores:  ${num1} ${num2} ${num3} ${num4}`);
    maximo(num1,num2,num3,num4);
    cont++;
}
while(cont<100)
