//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const events = require('events');

//Crear objeto:
const emitter = new events.EventEmitter();

//Crear un evento
emitter.on('eventoTest', (mensaje, status) => {
  console.log('${status}: ${mensaje}');
})

//Invocar evento:
emitter.emit('eventoTest', 'Este es mi mensaje', '200');
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos (Heredar directamente la clase):
const eventEmitter = require('events').EventEmitter;
const util = require('util');

//Definir clase:
const usuario = (nombre) => {
  this.nombre = nombre;
}

//Heredar (usuario extends to eventEmitter):
util.inherits(usuario, eventEmitter);

//Crear objeto:
let persona = new usuario('Camilo');

//Mostrar contenido del objeto:
console.log("Mi nombre es " + persona.nombre);

//Crear un evento usando objeto persona:
persona.on('hablar', (mensaje) => {
  console.log('${persona.nombre}: ${mensaje}');
})

//Invocar evento:
persona.emit('hablar', 'Este es mi mensaje');
//---------------------------------------------------------------------------------------------------------------------------//
