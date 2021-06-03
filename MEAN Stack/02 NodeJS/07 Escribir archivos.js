//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require("fs"); //Objeto para el manejo de archivos (File System).

//Determinar nombre del archivo:
const archivo = "test.txt";
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Validar existencia del archivo con existsSync():
if(fs.existsSync(archivo)){
  console.log('El archivo existe');
} else {
  console.log('El archivo NO existe');
}

//Validar existencia del archivo con access():
fs.access(archivo, fs.constants.F_OK, (error) => { //fs.constants.F_OK: Parametro para especificar que se evalue el archivo contra la constante F_OK (Archivo visible).
  //En caso de error terminar programa:
  if(error){
    console.log('El archivo NO existe');
    throw error;
  }
});
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Escribir en un archivo:
const contenido = "Lorem ipsum";

//Escribir de forma síncrona (Si no exíste lo crea):
fs.writeFileSync(archivo, contenido);

//Escribir de forma asíncrona (Si no exíste lo crea):
fs.writeFile(archivo, contenido, (error) => {
  //En caso de error terminar programa:
  if(error){
    console.log('Hubo un error al intentar escribir en el archivo.');
    throw error;
  }
});
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Agregar contenido a un archivo:
const mas_contenido = "test";

//Agregar al final de forma síncrona:
fs.appendFileSync(archivo, mas_contenido);

//Agregar al final de forma asíncrona:
fs.appendFile(archivo, mas_contenido, (error) => {
  //En caso de error terminar programa:
  if(error){
    console.log('Hubo un error al intentar escribir en el archivo.');
    throw error;
  }
});
//---------------------------------------------------------------------------------------------------------------------------//
