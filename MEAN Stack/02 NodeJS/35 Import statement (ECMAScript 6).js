//---------------------------------------------------------------------------------------------------------------------------//
// IMPORT STATEMENT (ECMAScript 6):
//---------------------------------------------------------------------------------------------------------------------------//
// La directiva de importación 'import' pertenece a ECMAScript 6 y no es interpretada de forma automática sobre NodeJS.
// Hay dos caminos para llevar adelante la interpretación de la misma sobre un proyecto en NodJS.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPCION 01 - DECLARAR COMO MÓDULO:
//---------------------------------------------------------------------------------------------------------------------------//
// En el archivo principal package.json, agregar el campo "type" de nivel superior con un valor de "module".
// Esto garantizará que todos los archivos .js y .mjs se interpreten como módulos ES.
// Puede interpretar archivos individuales como CommonJS usando la extensión .cjs.
//---------------------------------------------------------------------------------------------------------------------------//
// package.json
{
  "type": "module"
}

// Caso de uso (No mixto):
// El proyecto entero deberá respetar las directivas de ECMAScript 6.
import { Observable } from 'rxjs';

// Ejecución del proyecto (Comando habitual):
node -r esm nombre_archivo.js
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPCION 02 - INSTALACIÓN Y USO DE ESM:
//---------------------------------------------------------------------------------------------------------------------------//
// El paquete ESM es un cargador de módulos ECMAScript 6.
//---------------------------------------------------------------------------------------------------------------------------//
// Instalación:
npm i esm

// Caso de uso (Mixto):
import { Observable } from 'rxjs'
const express = require('express');

// Ejecución del proyecto:
node -r esm nombre_archivo.js
//---------------------------------------------------------------------------------------------------------------------------//
