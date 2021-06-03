//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");
const fs = require("fs");
const path = require("path");

//Crear servidor web:
http.createServer((req, res) => {
  //Enviar a la consola que muestre qué se esta solicitando y por que metodo:
  console.log(req.method + 'solicita' + req.url);

  //Validar request de index:
  if(req.url == '/'){
    //Leer archivo de forma asíncrona:
    fs.readFile('./index.html', 'UTF-8', (err, html) => {
      //Configurar el header:
      res.writeHead(200, 'content-type': 'text/html');

      //Cerrar conexión del servidor:
      res.end(html);
    })

  //Filtrar request para cargar CSS del sitio:
  } else if(req.url.match(/.css$/)){
    //Armar URL de lo que se este pidiendo (req), en la petición a nuestro servidor:
    const reqPath = path.join(__dirname, 'directorio', req.url);

    //Crear un stream (No sabemos cuanto tarde en cargar estos archivos):
    const fileStream = fs.createReadStream(reqPath, 'UTF-8');

    //Configurar el header CSS:
    res.writeHead(200, 'content-type': 'text/css');

    //Ir mandando a res de a pedacitos con funcion pipe:
    fileStream.pipe(res);

  //Filtrar request para cargar las imágenes del sitio:
  } else if(req.url.match(/.jpg$/)) {
    const reqPath = path.join(__dirname, 'directorio', req.url);
    const fileStream = fs.createReadStream(reqPath);
    res.writeHead(200, 'content-type': 'text/jpg');
    fileStream.pipe(res);

  } else {
    //Configurar el header:
    res.writeHead(404, 'content-type': 'text/plain');

    //Cerrar conexión del servidor:
    res.end('404 Error');
  }
}).listen(3000);
//---------------------------------------------------------------------------------------------------------------------------//
