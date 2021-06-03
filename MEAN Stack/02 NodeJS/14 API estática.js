//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const http = require("http");

//Crear array con elementos:
const array_ordenes = [
  {
    'nombre': 'sopa',
    'cantidad': 2,
    'estado': 'proceso',
    'mesa': 4
  },
  {
    'nombre': 'hamburguesa',
    'cantidad': 1,
    'estado': 'pagado',
    'mesa': 2
  }
];

//Crear servidor web:
http.createServer((req, res) => {
  //Validar request está en index:
  if(req.url == '/') {
    res.writeHead(200, 'content-type': 'text/json');
    red.end(JSON.stringify(array_ordenes));
  } else if(req.url == '/ordenes-proceso') {
    //Ejecutar función:
    pedidos_en_proceso(res);
  } else {
    res.writeHead(404, 'content-type': 'text/plain');
    res.end('404 Error');
  }
}).listen(3000);


//Crear funcion para filtrar por atributo:
const pedidos_en_proceso = (res) => {
  //Filtrar todos los elementos que tengan la palabra proceso en estado:
  const array_filtrado = array_ordenes.filter(item => {
    return item.estado == 'proceso';
  });

  res.writeHead(200, 'content-type': 'text/json');
  red.end(JSON.stringify(array_filtrado));
}
//---------------------------------------------------------------------------------------------------------------------------//
