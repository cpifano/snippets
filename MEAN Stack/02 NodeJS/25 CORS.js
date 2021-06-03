//---------------------------------------------------------------------------------------------------------------------------//
// CORS (Cross-Origin Resource Sharing):
//---------------------------------------------------------------------------------------------------------------------------//
// CORS es básicamente una politica de control de acceso HTTP que establecen los
// navegadores para brindar seguridad a los usuarios en caso de que un servidor este
// tratando de enviar o consumir información de otro servidor a traves de un fetch o
// simplemente una redirección.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Instalar Módulo de CORS:
// npm install cors --save
// Este módulo nos permite realizar solicitudes entre dominios de forma transparente.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const cors = require('cors');

const app = express();

//Solo hay que definir el uso del mismo para que se resuelva CORS sin inconvenientes:
app.use(cors());
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Podemos crear una lista blanca de acceso para evitar que otros puedan consumir de nuestra app sin autorización:
let whiteList = ['http://localhost:3000']; //Defino una lista de URLs permitidas.

let corsOptions = {
    origin: function (origin, callback) {
        if(whiteList.indexOf(origin) != -1){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

//Insertar el CORS options desde nuestro GET (Proveedor de información):
app.get('/', cors(corsOptions), (req, res) => {
    //Envio de información de test:
    res.json({response: 'OK'});
});
//---------------------------------------------------------------------------------------------------------------------------//
