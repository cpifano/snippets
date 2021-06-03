//---------------------------------------------------------------------------------------------------------------------------//
// HTTP:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");

//Crear servidor web:
http.createServer((req, res) => {
  //Esto se va a ejecutar cada vez que se realice una peticion a nuestro servidor.
  console.log("Se recibió petición http, envío mensaje para la consola");

  //Configurar el header:
  //(status code, content-type): 200 OK
  res.writeHead(200, 'content-type': 'text/html');

  //Cerrar conexión del servidor (finalizar respuesta de nuestro servidor):
  res.end('Hola mundo');

}).listen(3000); //3000 Utilizado por convención en NodeJS para servidores web.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// HTTPS:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const https = require('https');
const fs = require('fs');

//IMPORTAR CERTIFICADOS SSL:
const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

//Crear servidor web:
https.createServer(options, (req, res) => {
  //Configurar el header:
  //(status code, content-type): 200 OK
  res.writeHead(200, 'content-type': 'text/html');

  //Cerrar conexión del servidor (finalizar respuesta de nuestro servidor):
  res.end('Hola mundo');

}).listen(8000);

//TEST: curl -k https://localhost:8000/
//---------------------------------------------------------------------------------------------------------------------------//
