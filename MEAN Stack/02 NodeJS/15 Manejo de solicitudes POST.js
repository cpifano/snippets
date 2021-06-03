//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");
const fs = require("fs");

//Crear servidor web:
http.createServer((req, res) => {
  //Distinguir el método que se está utilizando:
  if(req.method == 'GET'){

    res.writeHead(200, 'content-type': 'text/html');
    //Mostrar respuesta de a pedacitos con funcion pipe:
    fs.createReadStream('./form.html', 'UTF-8').pipe(res);

  } else if(req.method == 'POST'){

    let datos_post = '';

    //Capturar los datos enviados por POST al request:
    req.on('data', (chunk) => {
      datos_post += chunk;
    });

    //Cuando termine el request:
    req.on('end', () => {
      res.writeHead(200, 'content-type': 'text/plain');
      //Cerrar conexión enviando los datos sin parsear del POST (variable=valor&otra_variable=otro_valor):
      res.end(datos_post);
    });
  }
}).listen(3000);
//---------------------------------------------------------------------------------------------------------------------------//
