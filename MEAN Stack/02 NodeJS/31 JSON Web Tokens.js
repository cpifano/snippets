//---------------------------------------------------------------------------------------------------------------------------//
// JSON WEB TOKEN - JWT:
// npm install --save jsonwebtoken
//---------------------------------------------------------------------------------------------------------------------------//


//###########################################################################################################################//
// ARCHIVO MAIN.JS:
//###########################################################################################################################//
//Importar módulos:
const express = require('express');
const jwt = require('jsonwebtoken');

//Importar archivo de control de acceso (JWT):
const jwtAccess = require('./jwt_access');

//Ejecutar Express y retornar objeto:
const app = express();

//Configurar Middleware (ex bodyParser):
app.use(express.json());                            //Para analizar(parsing) application/json
app.use(express.urlencoded({ extended: true }));    //Para analizar(parsing) application/x-www-form-urlencoded

//Importar checkJWT middleware:
const checkJWT = require('./middleware');

//Definición de Rutas protegidas con nuestro Middleware:
app.get('/private', checkJWT, (req, res) => {
  res.status(200).send({'message': 'Tienes acceso.'});
});

app.post('/rest-login', (req, res) => {
  //Get POST data:
  const { username, password } = req.body;

  //Filter credential from the credentials array by username and password:
  const currentCredential = jwtAccess.JWT_CREDENTIALS.find(credential => { return credential.username === username && credential.password === password });

  //Validar existencia de resultado:
  if(currentCredential){
    //Crear payload:
    const payload = {
      sub: currentCredential.id,             //Identifica el sujeto del token.
      iat: (Date.now() / 1000),       //Fecha de creación del token.
      //exp: //Fecha de expiración del token.
    }

    jwt.sign(payload, jwtAccess.JWT_SECRET, {expiresIn: currentCredential.time_exp}, (err, token) => {
      if(err){
          res.status(500).send({ message: 'Ha ocurrido un error.',  error: err });
          return;
      }
      res.status(200).send({ message: 'Autenticación exitosa.', token: token });
    });


  } else {
    res.json({ message: 'Usuario y/o password son incorrectos.' });
  }
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//###########################################################################################################################//


//###########################################################################################################################//
// ARCHIVO JWT_ACCESS.JS:
//###########################################################################################################################//
//Definir TOKEN SECRET:
const JWT_SECRET = 'MY_TOKEN_SECRET';

//Definir credenciales de acceso:
const JWT_CREDENTIALS = [
    {
        id: '54a8ce618e91b0b13665e2f9',
        username: 'angular-frontend',
        password: 'clave.segura.1',
        time_exp: '1m',
    },
    {
        id: '605a3f8282d6f81a5bbbc57a',
        username: 'mobile-app',
        password: 'clave.segura.2',
        time_exp: '2d',
    }
];

module.exports = {
    JWT_SECRET,
    JWT_CREDENTIALS
};
//###########################################################################################################################//


//###########################################################################################################################//
// ARCHIVO MIDDLEWARE.JS:
//###########################################################################################################################//
// Middleware para protegerse de las peticiones NO deseadas.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const jwt = require('jsonwebtoken');

//Importar archivo de control de acceso (JWT):
const jwtAccess = require('./jwt_access');

const checkJWT = (req, res, next) => {
      //Obtener token al portador de las cabeceras:
      let token = req.headers['x-access-token'] || req.headers['authorization'];

      //Validar que exista token:
      if(!token){
        res.status(401).send({ error: 'Es necesario un token de autenticación' });
        return;
      }

      //Sanear token del header:
      if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length);
      }

      //Validar token del header:
      if(token){
        jwt.verify(token, jwtAccess.JWT_SECRET, (err, decoded) => {
          if(err){
            return res.json({ message: 'El token no es válido.', error: err.message})
          } else {
            req.decoded = decoded;
            next();
          }
        });
      }
}

module.exports = checkJWT;
//###########################################################################################################################//
