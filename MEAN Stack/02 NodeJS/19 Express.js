//---------------------------------------------------------------------------------------------------------------------------//
// EXPRESS:
//---------------------------------------------------------------------------------------------------------------------------//
//Instalar express:
//npm install express
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');

//Ejecutamos express (Nos retorna un objeto con el que vamos a trabajar):
const app = express();

//Crear un servidor web y despachar contenido estático (Static):
app.use(express.static('./public_html'));

//Determinar puerto:
app.listen(3000);

console.log('Express iniciado...');
//---------------------------------------------------------------------------------------------------------------------------//
