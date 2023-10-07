let fecha = new Date();
let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

document.write(`
    "año": ${anio},
    "mes": ${mes + 1},
    "dia": ${dia},
    "hora": ${hora},
    "minutos": ${minutos},
    "segundos": ${segundos}
`)
