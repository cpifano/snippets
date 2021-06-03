//---------------------------------------------------------------------------------------------------------------------------//
// HTTPS:
//---------------------------------------------------------------------------------------------------------------------------//
// Generar certificado autofirmado con OpenSSL (.key y .crt):
// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout my_cert.key -out my_cert.crt
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

//Definir puertos:
const HTTPS_PORT = 8443;

//Ejecutar Express y retornar objeto:
const app = express();

//Configurar Middleware (ex bodyParser):
app.use(express.json());                            //Para analizar(parsing) application/json
app.use(express.urlencoded({ extended: true }));    //Para analizar(parsing) application/x-www-form-urlencoded

//Definición de Rutas protegidas con nuestro Middleware:
app.get('/', (req, res) => {
  res.status(200).send({'message': 'Hola mundo seguro.'});
});

//HTTPS Options:
const httpsOptions = {
  //Referenciar certificados SSL:
  key:  fs.readFileSync('my_cert.key'),
  cert: fs.readFileSync('my_cert.crt')
  //ca: fs.readFileSync('/path/to/ca.pem') [AUTOFIRMADO]
};

//Crear servidor HTTPS:
https.createServer(httpsOptions, app).listen(HTTPS_PORT, () => {
  console.log("Servidor HTTPS iniciado en el puerto: " + HTTPS_PORT);
});
//---------------------------------------------------------------------------------------------------------------------------//
