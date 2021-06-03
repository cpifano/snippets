//---------------------------------------------------------------------------------------------------------------------------//
// ASYNC Y AWAIT:
//---------------------------------------------------------------------------------------------------------------------------//
// Nos permiten esperar que una promesa se complete para poder manejar sus resultados libre de errores.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear función con promesa:
function getData(){
  //Fetch contiene una promesa:
  return fetch('http//localhost:3000/api')
  .then(response => response.json())
  .then(json => {
    console.table(json);
  });
}

//Defino la funcion como asíncrona:
//Async: Va a esperar que se complete la promesa para continuar con el flujo de la función.
async function showData(){
  //Ejecutar funcion con promesa de retorno:
  //Await: especifica cual es la promesa que hay que esperar.
  const json = await getData();

  console.log("Nombre: " + json.nombre);
}
//---------------------------------------------------------------------------------------------------------------------------//
