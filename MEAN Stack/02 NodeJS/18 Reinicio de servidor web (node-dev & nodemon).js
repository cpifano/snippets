//---------------------------------------------------------------------------------------------------------------------------//
//Instalar node-dev (Herramienta para desarrollo):
npm install -g node-dev

// En lugar de ejecutar un archivo con el comando node, lo hacemos con node-dev:
// De esta forma si ejecutamos un cambio en el contenido de nuestra implementación web, se verá reflejado automáticamente,
// ya que node-dev se encargará de reiniciar el servicio cada vez que guardemos nuestro archivo.
node-dev nombre_archivo

//Existe otro módulo en NPM con esta misma funcionalidad llamado nodemon.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");

//Crear servidor web:
http.createServer(function(req, res){
  //Esto se va a ejecutar cada vez que se realice una peticion a nuestro servidor.
  console.log("Se recibió petición http, envío mensaje para la consola");

  //Configurar el header:
  //(status code, content-type): 200 OK
  res.writeHead(200, 'content-type': 'text/html');

  //Cerrar conexión del servidor (finalizar respuesta de nuestro servidor):
  res.end('Hola mundo');

}).listen(3000); //3000 Utilizado por convención en NodeJS para servidores web.
//---------------------------------------------------------------------------------------------------------------------------//
