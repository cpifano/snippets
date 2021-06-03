//---------------------------------------------------------------------------------------------------------------------------//
// NUEVOS TIPOS DE DATOS ES:
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// SYMBOL:
//---------------------------------------------------------------------------------------------------------------------------//
// Tipo de dato primitivo que permite la creación de una referencia única.
// Los símbolos no pueden ser recorridos con estructuras de iteración como un FOR.
// Su utilidad es para generar propiedades privadas ocultas y únicas dentro de objetos.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Symbolo (Crea una referencia única):
const simbolo_uno = Symbol("Descripción");
const simbolo_dos = Symbol("Descripción");

console.log(simbolo_uno); //Symbol(Descripción)
console.log(simbolo_uno === simbolo_dos); //false
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// SET:
//---------------------------------------------------------------------------------------------------------------------------//
// Es una estructura de datos similar a un arreglo que solo acepta valores primitivos únicos.
// Es un tipo de datos muy útil para hacer eliminación de elementos duplicados.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Set:
let variable_set = new Set([1, 2, 2, true, false, true, "Hola", "HOLA"]);

//Solo conserva un elemento de cada valor único, si el valor se repite no lo aloja:
console.log(variable_set); //Set(6) {1,2,true,false,"Hola","HOLA"}

//Agregar elementos a un set:
variable_set.add("Mundo");
variable_set.add(8);

//Quitar elementos de un set:
variable_set.delete("HOLA");

//Convertir tipo de dato SET a un ARRAY:
let arreglo = Array.from(variable_set);

//Validar si un dato existe dentro de un set:
if(variable_set.has("Hola")){ /*...*/ }

//Vaciar un set:
variable_set.clear();
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MAPS:
//---------------------------------------------------------------------------------------------------------------------------//
// Objetos que nos sirven para almacenar conjuntos de valores asociados a manera de objetos.
// Son muy similares a los objetos primitivos y se utilizan mucho para generar colecciones.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Map:
let mapa = new Map();

//Cargar valor con método set:
mapa.set('nombre', 'Camilo');
mapa.set('apellido', 'Pifano');

//Validar si existe un tipo de valor (key):
if(mapa.has('nombre')){ /*...*/ }

//Obtener valores de un Map:
let nombre = mapa.get('nombre');

//Eliminar un valor de un Map:
mapa.delete('apellido');

//Vaciar un objeto Map:
mapa.clear();

//Crear un Map inicializado:
let mapa_dos = new Map([
  ['nombre','Camilo'],
  ['apellido','Pifano']
]);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// WEAKSETS Y WEAKMAPS:
//---------------------------------------------------------------------------------------------------------------------------//
// Son conceptualmente parecidos con sus predecesores, pero estos como los define su nombre, son considerados débiles para JS.
// Esto implica ventajas y desventajas, como desventajas se encuentra que no pueden ser recorridos con estructuras iterables,
// que no pueden ser cargados de forma masiva ni limpiar sus contenidos de forma masiva con clear, etc.
// Y como ventajas es que ni bien sean nulificados estos elementos seran limpiados por el garbaje collector del navegador,
// por ende mejoran la performance de uso de memoria de nuestro navegador.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Weakset:
const weakset = new WeakSet();

//Agragar contenido (Solo se puede agregar de a un elemento a la vez):
let valor = {'clave': 1};
weakset.add(valor); //Solo reciben referencias débiles (objetos).

//Nulificar para que pasen al garbaje collector:
valor = null; //Establecer contenido nulo en el contenido enviado como referencia.
//---------------------------------------------------------------------------------------------------------------------------//
