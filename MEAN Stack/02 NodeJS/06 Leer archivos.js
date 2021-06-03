//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require("fs"); //Objeto para el manejo de archivos (File System).
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Esta funcion retornará un array JSON con un listado de los archivos que se encuentran en la ruta especificada:
//Sync (De forma síncrona):
let sync_array_files = fs.readdirSync('./ruta');

//Mostrar contenido array:
console.log(sync_array_files);

//Leer archivo de forma síncrona:
let sync_archivo = fs.readFileSync("./archivo.txt", "UTF-8");

//Mostrar contenido de archivo de forma síncrona:
console.log(sync_archivo);
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//(De forma asíncrona):
fs.readdir('./ruta', (error, array_files) => {
  //En caso de error terminar programa:
  if(error){
    throw error;
  }

  //Mostrar contenido array:
  console.log(array_files);

  //Leer archivo de forma asíncrona:
  fs.readFile("./archivo.txt", "UTF-8", (error, archivo) =>{
    //En caso de error terminar programa:
    if(error){
      throw error;
    }

    //Mostrar contenido de archivo de forma asíncrona:
    console.log(archivo);
  });
});
//---------------------------------------------------------------------------------------------------------------------------//
