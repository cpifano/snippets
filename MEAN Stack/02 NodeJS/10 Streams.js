//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require("fs");

//Leer contenido de un archivo sin stream:
let contenido = fs.readFileSync('./archivo.log');
console.log('Largo: ' + contenido.length);
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// LEER:
//---------------------------------------------------------------------------------------------------------------------------//
//Para evitar la demora en carga de contenido se puede leer como stream:
let stream = fs.createReadStream('./archivo.log', 'UTF-8');

let contenido_streaming = '';

//Once se ejecuta la primera vez que se ejecute el evento de streaming:
stream.once('data', () => {
  console.log('Iniciando streaming...\n');
})

stream.on('data', (chunk) => {
  //Chunk pedazos del streaming:
  console.log(chunk.length + "|");
  contenido_streaming += chunk;
})

//Finalización del streaming:
stream.on('end', () => {
  console.log('Fin streaming.\n');
  console.log('Largo: ' + contenido_streaming.length);
})
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ESCRIBIR:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un nuevo stream
let stream = fs.createWriteStream('./nombre_archivo');

//Insertar pedazos al streaming (Puedo evitar el uso de writeFile y appendFile):
stream.write(chunk);

//Cerrar streaming:
stream.close()
//---------------------------------------------------------------------------------------------------------------------------//
