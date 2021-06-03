//---------------------------------------------------------------------------------------------------------------------------//
// VARIABLES Y CONSTANTES:
//---------------------------------------------------------------------------------------------------------------------------//
//Definir una variable (scope global - no posee ámbito de bloque):
var nombre_variable = 'valor';

//Definir una variable con let (scope local - posee ámbito de bloque):
//Una variable definida con let existe solo a partir de la linea en la que es definida y su alcance esta comprendido en el
//bloque definido {}.
let nombre_variable_let = 'valor';

//Definir una constante:
const nombre_constante = 'valor';
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MENSAJES A CONSOLA:
//---------------------------------------------------------------------------------------------------------------------------//
//Hola mundo:
console.log("Hola mundo!");

//Objeto window:
//El objeto window representa el objeto que JS mapea de toda la ventana al navegador.
console.log(window);

console.log(window.nombre_variable_let);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// BLOQUES:
//---------------------------------------------------------------------------------------------------------------------------//
var scope_global = "Hola";
let scope_local = "Mundo";
{
  //Esta variable solo existe dentro de este bloque:
  let variable_de_bloque = "Contenido";

  let scope_local = "En este caso la variable no tiene correspondencia con la variable fuera del bloque.";
  var scope_global = "Esta debería de ser una variable local al bloque."
}

//Sin embargo el contenido que persiste en la variable 'scope_global', es el asignado dentro del bloque.
console.log(scope_global);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TIPOS DE DATOS:
//---------------------------------------------------------------------------------------------------------------------------//
//Primitivos:
//Se accede directamente al valor.
string
number
boolean
null
undefined
NaN

//Compuestos:
//Se accede a la referencia del valor.
object = {}
array = []
function (){}
Class {}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MANEJO DE CONSTANTES CON TIPOS DE DATOS COMPUESTOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Las constantes nos permiten agregar contenidos a un tipo de dato compuesto.
// Esto se debe a que en los tipos de datos compuestos se accede a la referencia del valor y no estamos cambiando al dato
// compuesto en si.
//---------------------------------------------------------------------------------------------------------------------------//
//Objeto JS:
const usuario{
  nombre: 'Camilo',
  apellido: 'Pifano',
  activo: true
};

//Agregar un atributo al objeto:
usuario.correo = "camilopifano@gmail.com";

//Arreglo:
const colores = ['rojo', 'verde', 'azúl'];

//Agregar elemento al final de un array:
colores.push('violeta');
//---------------------------------------------------------------------------------------------------------------------------//
