//---------------------------------------------------------------------------------------------------------------------------//
// SIN MIDDLEWARE [PARSER DE URL]:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');

//Ejecutar Express y retornar objeto:
const app = express();

////Este metodo se va a activar cuando nuestro servidor reciba una solicitud GET:
app.get('/', (req, res) => {
    //Solicito la URL como string:
    let url = req.url;

    //Separo elementos extrayendo la barra (/) y (?):
    url = url.substring(url.indexOf('?') + 1);

    //Separamos variables GET (&):
    const params = url.split('&');
    let text = '';

    //Recorremos variables GET extraidas y separamos clave de valor (=):
    params.forEach(param, () => {
        let object = param.split('=');
        //0 Clave : 1 Valor:
        text += object[0] + ' : ' + object[1] + '<br/>';
    });

    res.send('Tus datos son: ' + text);
    console.log(text);
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CON MIDDLEWARE [BODY PARSER]:
//---------------------------------------------------------------------------------------------------------------------------//
// Importación y uso manual deprecado.
// Express incluye dentro de su codigo la importación de bodyParser.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const bodyParser = require('body-parser'); //Middleware

//Ejecutar Express y retornar objeto:
const app = express();

//Configurar Body Parser:
const urlencodedParser = bodyParser.urlencoded({extended: false}); //URL no esta decodificada.

//Este metodo se va a activar cuando nuestro servidor reciba una solicitud GET:
app.get('/', urlencodedParser, (req, res) => {

    //Query posee un JSON con los datos enviados por GET o POST:
    res.send('Tu dato es: ' + req.query.nombre_clave);
    console.log(req.query);
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//
