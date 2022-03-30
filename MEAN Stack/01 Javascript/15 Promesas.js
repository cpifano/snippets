//---------------------------------------------------------------------------------------------------------------------------//
// PROMESAS:
//---------------------------------------------------------------------------------------------------------------------------//
// Nos permiten llevar a cabo la ejecución de bloques de código utilizando control del manejo de errores y el uso correcto
// de la programación asíncrona.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// ESTRUCTURA BÁSICA DE UNA PROMESA:
//---------------------------------------------------------------------------------------------------------------------------//
let x = 10;

//Crear una promesa:
const promesa = new Promise((resolve, reject) => {
  //Validar la promesa
  if(x == 10){
    //Retorno en caso de éxito:
    resolve("La variable es igual a 10.");
  } else {
    //Retorno en caso de error:
    reject("La variable no es igual a 10.");
  }
});

//LLamar a la promesa:
//Then: cada paso a realizar.
//Catch: quien va a capturar el error a manejar.
promesa
.then(res => {
  console.log("Success:" + res);
})
.catch(error => {
  console.error("Error:" + error);
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CASO DE ERROR POR PROGRAMACIÓN SÍNCRONA:
//---------------------------------------------------------------------------------------------------------------------------//
let x = 10;

console.log("01 Proceso iniciado.");

//Simular comportamiento de una petición a servidor externo:
setTimeout(() => {
  x++;
  console.log("02 Proceso finalizado.");
}, 2000);

console.log("03 Resultado:" + x);

// RESULTADO:
// 01 Proceso iniciado.
// 03 Resultado: 10
// 02 Proceso finalizado.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// RESOLUCIÓN DEL CASO CON PROMESAS:
//---------------------------------------------------------------------------------------------------------------------------//
let x = 10;

const promesa = new Promise((resolve, reject) => {
  //Simular comportamiento de una petición a servidor externo:
  setTimeout(() => {
    x++;
    console.log("02 Proceso finalizado.");

    //Retorno en caso de éxito:
    resolve(x);
  }, 2000);
});

console.log("01 Proceso iniciado.");

//Ejecutar promesa:
promesa.
then(res => {
  console.log("03 Resultado:" + res);
})
.catch(error => {
  console.error("Error:" + error);
});

// RESULTADO:
// 01 Proceso iniciado.
// 02 Proceso finalizado.
// 03 Resultado: 11
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// FUNCIONES CON PROMESAS:
//---------------------------------------------------------------------------------------------------------------------------//
let usuarios = [
  {id: 1, nombre: 'Camilo'},
  {id: 1, nombre: 'Lorenzo'}
];

//Función obtener usuario:
const getUsuario = (id) => {
  //Asignar una promesa al retorno:
  return new Promise ((resolve, reject) => {
    if(usuarios.find(usuario => usuario.id == id)){
      //Retorno en caso de éxito:
      resolve(usuario);
    } else {
      //Retorno en caso de error:
      reject("El usuario no existe.");
    }
  });
};

//Ejecutar función con promesa de retorno:
getUsuario(1)
.then(res => {
  console.log("Usuario encontrado:" + res.nombre);
})
.catch(error => {
  console.error("Error:" + error);
});
//---------------------------------------------------------------------------------------------------------------------------//
