//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require("fs");

//mkdir síncrono:
fs.mkdirSync('./nombre_directorio');

//mkdir asíncrono:
fs.mkdir('./nombre_directorio', (error) => {
  if(error){
    throw('Error: ' + error);
  } else {
    console.log('Carpeta creada');
  }
});

//Validar existencia del directorio con existsSync():
if(fs.existsSync('nombre_directorio')){
  console.log('El directorio existe');
} else {
  console.log('El directorio NO existe');
}
//---------------------------------------------------------------------------------------------------------------------------//
