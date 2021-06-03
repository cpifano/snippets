//---------------------------------------------------------------------------------------------------------------------------//
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const usuario = (nombre) => {
  this.nombre = nombre;
}

util.inherits(usuario, eventEmitter);

//Exportar un modulo:
module.exports = usuario; //exports nos pide un objeto
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Utilizar módulo exportado:
const usuario = require('./usuario.js');

//Crear objeto:
let persona = new usuario('Camilo');
//---------------------------------------------------------------------------------------------------------------------------//
