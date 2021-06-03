//---------------------------------------------------------------------------------------------------------------------------//
// MUSTACHE:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un view engine, probablemente su concepto de doble mustache sea de los más utilizados para sistemas de vistas
// y salidas estandar de información.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Especifico cual va a ser mi motor de plantillas (View Engine):
app.engine('.mustache', mustacheExpress()); //Esto es para que express reconozca la extención .mustache
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
    const datos = [
        {nombre: 'Juan', apellido: 'Perez'},
        {nombre: 'Matias', apellido: 'Gonzales'},
    ];

    //Renderizar:
    res.render('index',{
        titulo: 'appMustache',
        nombre: 'Camilo Pifano',
        datos: datos
    });
});

app.listen(3000, () => {
    console.log('Servidor web iniciado en puerto 3000.')
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ARCHIVOS DE VISTAS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es necesario crear una carpeta views donde se alojarán las vistas que detectará mustache.
//---------------------------------------------------------------------------------------------------------------------------//

//Contenido de archivo views/index.mustache:-----------------------------------------//
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{titulo}}</title>
    </head>
    <body>
        Bienvenidos, mi nombre es {{nombre}}.
        {{#datos}}
            <li>{{nombre}} {{apellido}}</li>
        {{/datos}}
    </body>
</html>
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
