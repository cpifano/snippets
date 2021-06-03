//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");

const options = {
  hostname: 'localhost',
  port: 80,
  path: '/ruta/archivo_api.php',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log('status code: ' + res.statusCode);
  console.log('headers: %j', res.headers);

  //Obtener datos:
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });

  //Mostrar datos al finalizar la petición:
  res.on('end', () => {
    console.log('\n\n Resultados:');
    console.log(body);
  })
});

//Cuando hay un error activar evento:
req.on('error', (error) => {
  //...
});

//Cerrar solicitud:
req.end();
//---------------------------------------------------------------------------------------------------------------------------//
