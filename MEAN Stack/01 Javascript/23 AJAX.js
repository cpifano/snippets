//---------------------------------------------------------------------------------------------------------------------------//
// AJAX - Asynchronous Javascript & XML:
//---------------------------------------------------------------------------------------------------------------------------//
// Técnica de desarrollo web para crear aplicaciones interactivas.
// Estas aplicaciones se ejecutan en el cliente, es decir, en el navegador de los usuarios mientras se mantiene la
// comunicación asíncrona con el servidor en segundo plano.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// OBJETO XMLHttpRequest (XHR):
//---------------------------------------------------------------------------------------------------------------------------//
const xhr = new XMLHttpRequest();

//Asignar evento:
xhr.addEventListener('readystatechange', (e)=>{
  //Validar estado (readyState: 4 | Complete):
  if(xhr.readyState !== 4) return;

  //Validar HTTP Status:
  if(xhr.status >= 200 && xhr.status < 300){
    //Parsear el contenido del text response:
    let json = JSON.parse(xhr.responseText); //Parsear a JSON.

    //Enviar a la consola el resultado:
    console.log(json);
  } else {
    //Enviar mensaje de error a la consola:
    console.log('Error Status: ' + xhr.status);
  }
});

//Establecer método y URL de la petición:
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//Enviar petición:
xhr.send();
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// API FETCH (Standard):
//---------------------------------------------------------------------------------------------------------------------------//
//Ejecutar método fetch (Retorna una promesa):
fetch('https://jsonplaceholder.typicode.com/users', {
  //Definir opciones (opcionales):
  method: 'GET'
})
.then((res) =>{
  //Fech Retorna un objeto Response:
  //Retornamos un JSON solo con el resultado de la petición al siguiente then de fetch.
  return res.json();
})
.then((json) => {
  //Enviar a la consola el resultado:
  console.log(json);
})
.catch((err) => {
  //Enviar mensaje de error a la consola:
  console.log("Error: " + err);
});

//Async & Await:
async function getDatos(){
  try{
    //Esperar resultado de fetch antes de pasar a la siguiente linea:
    let res = await fetch('https://jsonplaceholder.typicode.com/users');

    //Esperar a que culmine la conversión antes de pasar a la siguiente linea:
    let json = await res.json();

    //Enviar a la consola el resultado:
    console.log(json);

  } catch (err) {
    //Enviar mensaje de error a la consola:
    console.log("Error: " + err);
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// AXIOS (Librería):
//---------------------------------------------------------------------------------------------------------------------------//
//Importar librería:
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
const axios = require('axios');

//GET Request:
axios.get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    //Axios nos retornará un objeto data parseado (JSON):
    console.log(res.data);
  })
  .catch((err) => {
    //Enviar mensaje de error a la consola:
    console.log(err);
  })
  .then(() => {
    //Finally (se ejecuta siempre)
});

//POST Request:
axios.post('/URL_Guardado_API', {
  nombre: 'Camilo',
  apellido: 'Pifano'
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  //Enviar mensaje de error a la consola:
  console.log(err);
});

//Async & Await:
async function getDatos(){
  try{
    //Esperar resultado de la petición antes de pasar a la siguiente linea:
    let res = axios.get('https://jsonplaceholder.typicode.com/users');

    //Esperar a que Axios nos retorne el objeto ya parseado (JSON):
    let json = await res.data;

    //Enviar a la consola el resultado:
    console.log(json);

  } catch (err) {
    //Enviar mensaje de error a la consola:
    console.log("Error: " + err);
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
