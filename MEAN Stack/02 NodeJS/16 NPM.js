//---------------------------------------------------------------------------------------------------------------------------//
// NPM:
//---------------------------------------------------------------------------------------------------------------------------//
// Es el gestor de paquetes de NodeJS.
//---------------------------------------------------------------------------------------------------------------------------//
//Ver la versión instalada:
npm -v

//Instalar paquete/librería desde NPM:
npm install nombre_paquete

// Creará una carpeta llamada node_modules y un archivo llamado package-lock.json
// node_modules: contiene los modulos instalados.
// package-lock.json: este archivo tiene un registro de los módulos que tenemos instalados
// (Nos permitirá la administración de los mismos).
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Ejemplo:
npm install underscore

//Underscore.js: Permite realizar operaciones vairas de una forma más sencilla.
const underscore = require('underscore');
const lista = [
  {
    'id':1,
    'nombre':'Camilo',
    'apellido':'Pifano',
  },
  {
    'id':2,
    'nombre':'Juan',
    'apellido':'Perez',
  }
];

const resultado = underscore.findWhere(lista, {id: 2}); //Retornará el segundo array dentro de la lista.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// INSTALACIÓN DE UN MÓDULO DE FORMA GLOBAL:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar de forma global permite que sea accesible este módulo para todos los proyectos de NodeJS.
//---------------------------------------------------------------------------------------------------------------------------//
npm install -g nombre_paquete
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Inicializar proyecto:
npm init
//Generará un archivo package.json con la información del proyecto.

//Instalar todas las dependencias que puedan estar definidas dentro del archivo package.json:
npm install //Dentro del directorio del proyecto.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// PUBLICAR EN NPM REGISTRY:
//---------------------------------------------------------------------------------------------------------------------------//
//Registrarse en la plataforma.

//Iniciar sesión:
npm adduser

//Publicar proyecto, desde la carpeta del proyecto:
npm publish
//---------------------------------------------------------------------------------------------------------------------------//
