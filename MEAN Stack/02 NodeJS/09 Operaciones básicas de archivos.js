//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require("fs");

//Renombrar o Mover archivo síncrono:
//Al igual que en la shell de linux se puede utilizar rename para mover cambiando la ruta.
fs.renameSync('./nombre_archivo', './nuevo_nombre_archivo');

//Renombrar o Mover archivo asíncrono:
//Al igual que en la shell de linux se puede utilizar rename para mover cambiando la ruta.
fs.rename('./nombre_archivo', './nuevo_nombre_archivo', (error) => {
  if(error){
    throw('Error: ' + error);
  } else {
    console.log('Archivo renombrado');
  }
});

//Eliminar archivo síncrono:
fs.unlinkSync('./nombre_archivo');

//Eliminar archivo asíncrono:
fs.unlink('./nombre_archivo', (error) => {
  if(error){
    throw('Error: ' + error);
  } else {
    console.log('Archivo eliminado');
  }
});
//---------------------------------------------------------------------------------------------------------------------------//
