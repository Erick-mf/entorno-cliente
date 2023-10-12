// Sobre un array con nombres, encuentra todas las entradas cuyo nombre empiece por 'J',
// crea una proyección combinada solo con las iniciales del nombre y luego ordena alfabéticamente
let startsWithJ = nameArray.filter(name => name.startsWith('J'));
let initials = startsWithJ.map(name => name[0]);
initials.sort();
