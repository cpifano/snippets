//---------------------------------------------------------------------------------------------------------------------------//
// READLINE:
//---------------------------------------------------------------------------------------------------------------------------//
// El módulo Readline nos permite manipular el input y el output de nuestra consola.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const readline = require("readline");
const util = require("util");

//Crear una interfaz para este módulo:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Crear una array vacío:
let comentarios = [];

//Funcion Question (Permite solicitar un input y escribir un output):
rl.question('¿Cuál es tu nombre? ', function(input){
  console.log("Hola" + input + ", bienvenido.");

  rl.setPrompt("Deje un comentario: ");
  rl.prompt();

})

//Capturar el evento on line (Escribir una linea):
rl.on('line', function(input){
  //Determinar que cierre el proceso al ingresar la palabra exit.
  if(input.trim() === 'exit'){
    //Mostrar los comentarios antes de salir:
    let mensaje = util.format("Tus comentarios son: %j", comentarios); // %j = JSON
    conslole.log(mensaje);
    process.exit();
  }

  //push para argregar elementos al array y trim para quitar saltos de linea.
  comentarios.push(input.trim());

  rl.setPrompt("Deje otro comentario: ");
  rl.prompt();
});
//---------------------------------------------------------------------------------------------------------------------------//
