//---------------------------------------------------------------------------------------------------------------------------//
// TEMPORIZADORES:
//---------------------------------------------------------------------------------------------------------------------------//
//setTimeout:
//Esperará el intervalo de tiempo definido en milisegundos para ejecutar el código definido en la función callback.
setTimeout(() => {
  console.log("Ejecuntando setTimeout (Esto se ejecuta una sola vez)");
}, 1000); //Milisegundos (1 segundo).

//setInterval:
//Ejecutará el código definido dentro de la función callback de forma indefinida segun el intefvalo de tiempo definido en
//milisegundos.
setInterval(() => {
  console.log("Ejecuntando setInterval (Esto se ejecuta una cada 1 segundo)");
}, 1000); //Milisegundos (1 segundo).
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// METODOS DE CORTE:
//---------------------------------------------------------------------------------------------------------------------------//
//setTimeout:
let temporizador = setTimeout(() => {
  //...///
}, 1000);

//Detener la ejecución del setTimeout:
clearTimeout(temporizador);

//setInterval:
//Ejecutará el código definido dentro de la función callback de forma indefinida segun el intefvalo de tiempo definido en
//milisegundos.
let temporizador = setInterval(() => {
  console.log("Ejecuntando setInterval (Esto se ejecuta una cada 1 segundo)");
}, 1000); //Milisegundos (1 segundo).

//Detener la ejecución del setInterval:
clearInterval(temporizador);
//---------------------------------------------------------------------------------------------------------------------------//
