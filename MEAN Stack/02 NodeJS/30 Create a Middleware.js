//---------------------------------------------------------------------------------------------------------------------------//
// SERVER.JS
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');

//Importar Nuestro Middleware:
const myMiddleware = require('./my_middleware');

//Ejecutar Express y retornar objeto:
const app = express();

//Configurar Middleware (ex bodyParser):
app.use(express.json());                            //Para analizar(parsing) application/json
app.use(express.urlencoded({ extended: true }));    //Para analizar(parsing) application/x-www-form-urlencoded

//Definición de Rutas con nuestro Middleware:
app.get('/private', myMiddleware, (req, res) => {
  res.status(200).send({'message': 'OK'});
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MY_MIDDLEWARE.JS
//---------------------------------------------------------------------------------------------------------------------------//
const middlewareTester = (req, res, next) => {
    console.log('Middleware works!');

    //Pasar al siguiente middleware:
    next();
};
module.exports = middlewareTester;
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MIDDLEWARE CON PARAMETROS:
//---------------------------------------------------------------------------------------------------------------------------//
const middlewareParameters = (parameter) => {
    return (req, res, next) => {
      console.log('Middleware works! ' + parameter);

      //Pasar al siguiente middleware:
      next();
    }
};
module.exports = middlewareParameters;

//Caso de uso:
app.get('/private', middlewareParameters('Contenido del parametro'), (req, res) => {
  res.status(200).send({'message': 'OK'});
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MIDDLEWARE DE ACCESO RAIZ:
//---------------------------------------------------------------------------------------------------------------------------//
const express = require('express');
const app = express();

const requestTime = (req, res, next) => {
  //El middleware añade requestTime a req:
  req.requestTime = Date.now();
  next();
};

//Establecer que la raíz de la aplicación (express), utilice nuestro middleware:
app.use(requestTime);

app.get('/', (req, res) => {
  let responseText = 'Hola Mundo!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);
//---------------------------------------------------------------------------------------------------------------------------//
