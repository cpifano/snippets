//---------------------------------------------------------------------------------------------------------------------------//
// TIPOS DE DATOS:
//---------------------------------------------------------------------------------------------------------------------------//
// En javascript todos los tipos de datos son objetos inclusive los tipos de datos primitivos.
//---------------------------------------------------------------------------------------------------------------------------//
//Ejemplo tipo de dato String (MDN - Mozilla Developer Network):
Propiedades
  String.prototype
  String.length
Métodos
  //...//
  String.prototype.toUpperCase()
  //...//
//---------------------------------------------------------------------------------------------------------------------------//


//###########################################################################################################################//
// PRIMITIVOS:
//---------------------------------------------------------------------------------------------------------------------------//
// STRING [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
let nombre = "Camilo";
let apellido = "Pifano";

//Podemos declarar un string con el constructor del objeto:
let saludo = new String("Hola");

//Propiedad length:
let largo = saludo.length;

//Metodo de objeto string:
saludo = saludo.toUpperCase(); //Todo a mayusculas

//Concatenación de strings:
let nombre_completo = nombre + " " + apellido;

//Back tip (Template strings):
let saludo_completo `Hola ${nombre_completo}`;
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// NUMBER [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
let numero_uno = 10;

//Lo podemos declarar con su constructor:
let numero_dos = new Number(7.19);

//Metodo de objeto number:
let redondeo_decimal = numero_dos.toFixed(1); // 7.2 - Define la cantidad de digitos decimales.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// BOOLEAN [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
let booleano = true;

//Lo podemos declarar con su constructor:
let otro_booleano = new Boolean(false);

//Valores considerados true (Truthy):
Boolean(true)
Boolean({})
Boolean([])
Boolean(42)
Boolean("foo")
Boolean(new Date())
Boolean(-42)
Boolean(3.14)
Boolean(-3.14)
Boolean(Infinity)
Boolean(-Infinity)

//Valores considerados false (Falsy):
Boolean(false)
Boolean(null)
Boolean(undefined)
Boolean(0)
Boolean(-0)
Boolean(0n)
Boolean(NaN)
Boolean("")
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// NULL [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
//Representa un valor ausente nulo en ocasiones con intención.
let variable_nula = null;
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// UNDEFINED [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
//Representa un valor ausente de una variable que no ha sido inicializada.
let variable;
console.log(typeof variable);
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// NAN [PRIMITIVO]:
//---------------------------------------------------------------------------------------------------------------------------//
//Not is a Number: sirve para identificar y evaluar el contenido de una variable (No es un número).
let noEsUnNumero = "Hola mundo";

//Evaluar con método isNaN:
(isNaN(noEsUnNumero) //true

//###########################################################################################################################//


//###########################################################################################################################//
// COMPUESTOS:
//---------------------------------------------------------------------------------------------------------------------------//
// FUNCTION [COMPUESTO]:
//---------------------------------------------------------------------------------------------------------------------------//
// Javascript al momento de interpretar el código eleva la declaración de las funciones dentro del scope en el que se
// encuentran delcaradas.
// Esto permite que las funciones se puedan ejecutar sin importar en que parte del archivo sean ejecutadas.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear función declarada:
function saludo(){
  console.log("Hola mundo!");
}

//Ejecutar función:
saludo();

//Función declarada con parametros y retorno:
function suma (numero_uno, numero_dos){
  return numero_uno + numero_dos;
}

//Ejecutar función:
let resultado = suma(2, 4);

//Funcion anónima (Asignación dinámica):
const fnExpresada = function(){
  //Funcion que se le ha asignado como valor a una constante.
  //Esta función NO podrá ser accesible antes de su declaración.
}

//Ejecutar funcion:
fnExpresada();

//Arrow function (Funciones anónimas expresadas):
const fnExpresada = () => {
  //...///
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// ARRAYS [COMPUESTO]:
//---------------------------------------------------------------------------------------------------------------------------//
//Definir array vacío:
const arreglo_a = [];

const arrleglo_b = ['Hola', true, 10, [1, 2, 3]];

//Propiedad length de arrays:
let largo = arrleglo_b.length;

//Declarar un array por su constructor:
const arreglo_frutas = new Array("Manzana", "Naranja", "Banana");

//Ejecutar método push del objeto array para agregar un elemento al final:
arreglo_frutas.push("Pera");

//Completar elementos con array fill (Método del objeto array):
const arreglo_valores = Array(100).fill(true); //Las 100 posiciones del arreglo contendran el valor true.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// OBJETOS [COMPUESTO]:
//---------------------------------------------------------------------------------------------------------------------------//
//Definir un objeto:
const objPersona = {
  nombre: 'Camilo',
  apellido: 'Pifano'
  contacto: {
    email: 'camilopifano@gmail.com',
    teléfono: '12345678'
  },
  saludar: function(){
    console.log(`Hola ${this.nombre}`);
  }
};

//Acceder a un dato del objeto:
console.log('Email: ' + objPersona.contacto.email);

//Acceder a un método del objeto:
objPersona.saludar();

//Ejecutar metodo del objeto object keys (Retornará los nombres de las claves de mi objeto):
let claves = Object.keys(objPersona);

//###########################################################################################################################//
