let fecha = new Date();
let fechaHoy = fecha.getFullYear() + "/" + fecha.getMonth() + "/" + fecha.getDate() + " hrs" + fecha.getHours();
let fecha85 = fecha.getFullYear() + "/" + (fecha.getMonth() + 1) + "/" + (fecha.getDate() + 85) + " hrs" + fecha.getHours();
let fecha187 = fecha.getFullYear() + "/" + (fecha.getMonth() + 1) + "/" + (fecha.getDate() - 187) + " hrs" + fecha.getHours();
let fecha85_2anio = fecha85.replace(fecha.getFullYear(), fecha.getFullYear() + 2);
let fecha187_24hrs = fecha187.replace(fecha.getHours(), fecha.getHours() + 24);
let fechaResto = fecha85 - fecha187;

document.write(`fecha ${fechaHoy} <br>`);
document.write(`fecha85 ${fecha85} <br>`);
document.write(`fecha187 ${fecha187} <br>`);
document.write(`fecha85  - 24 años ${fecha85_2anio} <br>`);
document.write(`fecha187  - 24 horas ${fecha187_24hrs} <br>`);
document.write(`fecha85  - fecha187  ${fechaResto} <br>`);
