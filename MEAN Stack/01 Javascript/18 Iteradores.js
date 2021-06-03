//---------------------------------------------------------------------------------------------------------------------------//
// ITERADORES:
//---------------------------------------------------------------------------------------------------------------------------//
// Es la propiedad controla la iteración de todo elemento iterable.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un elemento iterable:
const elemento_iterable = [1,2,3,4,5];

//Acceder a la propiedad iterator de mi elemento iterable:
const iterador = elemento_iterable[Symbol.iterator](); //Obtener la referencia de la propiedad iterator.

//Ejecutar método del iterador:
let objRetorno = iterador.next(); //Retorna un objeto (valor y done: parametro que indica si finalizó).

//Recorrer elemento iterable:
while(!objRetorno.done){
  console.log(objRetorno.value);
  objRetorno = iterador.next(); //Pasa a la siguiente posición.
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// GENERADORES:
//---------------------------------------------------------------------------------------------------------------------------//
// Nos permite convertir una función en un elemento iterable.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un generador (Función iterable):
function* iterable(){
  //Yield un return, pero queda el cursor en esta linea hasta la proxima ejecución next().
  yield console.log("Hola");

  console.log("Dos");

  //En la siguente ejecución next() del generador pasará hasta el siguiente yield:
  yield console.log("mundo!");
}

//Acceder a la propiedad iterator de mi función iterable:
const iterador = iterable();

//Ejecutar función iterable:
iterador.next(); //Hola
iterador.next(); //Dos | mundo!

//Guardar en un arreglo el resultado de una función iterable:
//Spread operator (...): Por cada yield (retorno de la función), de la iteración se guarda una posición del arreglo.
const arreglo = [...iterable()];  //arreglo = ["Hola", "mundo!"];
//---------------------------------------------------------------------------------------------------------------------------//
