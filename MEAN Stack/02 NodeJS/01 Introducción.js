//---------------------------------------------------------------------------------------------------------------------------//
// EJECUTAR UN ARCHIVO CON NODEJS:
//---------------------------------------------------------------------------------------------------------------------------//
node nombre_archivo.js

//NodeJS posee variables globales que pueden ser de utilidad:
__dirname : "Contiene la ruta (path) de donde se está ejecutando el script .js"
__filename : "Contiene el path más el nombre del archivo que se esté ejecutando"
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MÓDULOS:
//---------------------------------------------------------------------------------------------------------------------------//
// En NodeJS, un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar.
// NodeJS cuenta con varios módulos que se encuentran documentados y a disposición de los programadores.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar un módulos:
const path = require("path"); //El módulo path posee elementos para el uso de rutas y archivos.
const util = require("util") //Utilities
const v8 = require("v8"); //Engine de NodeJS

//Path:
console.log(path.basename(__filename)); //En esta ocasión se retornará solo el nombre del archivo (sin path):
console.log(path.join('var', 'www', 'html')); //Retornará /var/www/html.

//Utilities:
util.format('%s:%s', 'foo', 'bar', 'baz'); //Retornará foo:bar baz

//v8:
console.log(v8.getHeapStatistics()); //Retornará información estadistica en formato JSON.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// PROCESOS Y ARGUMENTOS:
//---------------------------------------------------------------------------------------------------------------------------//
// El objeto de process es un objeto global que proporciona información y control sobre el proceso actual de Node.js.
// Como global, siempre está disponible para las aplicaciones Node.js sin usar require(). También se puede acceder
// explícitamente usando require(): pero no es necesario.
//---------------------------------------------------------------------------------------------------------------------------//
//Usar Process (Objeto global):
//Retorna un array con dos elementos (Donde se está ejecutanto el proceso, Y de donde se está ejecutando).
console.log(process.argv);

//Ejecutar un archivo con argumentos:
node procesos.js --nombre "Camilo" --apellido "Pifano"

//En este caso process.argv va a retornar ademas los argumentos que se declararon al momento de la ejecución.
//["/usr/local/bin/node","/ruta/del/archivo","--nombre","Camilo","--apellido","Pifano"]

//Mapear argumentos:
function param(parametro){
  let index = proccess.argv.indexOf(paramentro); //Retornará la posición en la que se encuentra el parametro.
  return process.argv[index + 1];
}

let nombre = param("--nombre");
let apellido = param("--apellido");

console.log("Hola" + nombre + " " + apellido);

//Buffer:
console.log(Buffer.alloc(10)); //Mostrará el numero 10 en binario.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// VARIABLES DE ENTORNO:
//---------------------------------------------------------------------------------------------------------------------------//
// Podemos ejecutar en la terminal el comando 'node' y posteriormente ejecutar 'process.env' para listar todas las variables
// de entorno.
// Si se desean agregar variables de entorno de NodeJS se puede realizar instalando un módulo llamado 'dotenv'.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ENTRADAS Y SALIDAS ESTÁNDAR:
//---------------------------------------------------------------------------------------------------------------------------//
//stdout (Mostrar información desde la terminal):
process.stdout.write("Hola mundo\n"); //Console log, no está hecho para enviar mensajes a la terminal, su finalidad es para log.

//stdin (Leer información desde la terminal):
let variable;
process.stdin.on('data', function(data){
  //trim quita todos los caracteres de espacios y saltos de lineas al principio y al final de la cadena.
  //Por defecto se almacenaría el salto de linea del enter de envío.
  variable = data.toString().trim();

  process.stdout.write(variable);
  proccess.exit(); //Cierro el proceso para que no quede eternamente solicitando el dato de forma recursiva.
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// IMPORT & REQUIRE:
//---------------------------------------------------------------------------------------------------------------------------//
// En Node.js se crearon un sistema de módulos llamado CommonJS, este se usa con: const modulo = require('modulo');
// En ES2015/6 se agrego al lenguaje un sistema nativo de módulos usando la sintaxis de: import modulo from 'modulo';
// Aunque básicamente parece que hacen lo mismo, en realidad funcionan de forma distinta a más bajo nivel.
//
// Cuando se carga en CommonJS un módulo (require), trae una copia del módulo para que lo puedas usar, mientras que ES2015
// (import), trae una referencia a ese módulo.
//
// Esto quiere decir que si tu módulo tiene una variable y exporta una función que modifica esa variable, cualquier otra
// parte de tu aplicación que haga uso de dicha variable va a ver reflejado el cambio, mientras que con CommonJS cada uno
// tendría su copia de la variable.
//---------------------------------------------------------------------------------------------------------------------------//
//JS +ES6:
import elemento from 'elemento';

//CommonJS (NodeJS):
const elemento = require('elemento');
//---------------------------------------------------------------------------------------------------------------------------//
