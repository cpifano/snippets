//Importar módulos:
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

//Cargar formulario principal para envío de datos (action=post_receiver).
app.get('/', function (req, res) {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('./public/index.html');
});

//Crear sector de la web para recepcionar información POST del formulario principal.
app.post('/post_receiver', function(req, res){
    res.setHeader('Content-type', 'text/plain');
    const nombre = req.body.nombre; //Capturar dato POST nombre.
    const apellido = req.body.apellido;

    //Abrir archivo de guardado JSON:
    let file = fs.readFileSync('./datos.json', 'UTF-8');

    //Convertirlo a un Array:
    let json = JSON.parse(file);

    //Insertar nuevo registro:
    json.usuarios.push({'nombre': nombre, 'apellido': apellido}); //'usuarios' es el nombre del elemento definido en datos.json

    //Guardar JSON en el archivo:
    file = fs.writeFileSync('./datos.json', JSON.stringify(json));

    res.send('Datos guardados con éxito');
});

//Crear sección de la web para muestreo de datos:
app.get('/get_datos', function(req, res){
    const file = fs.readFileSync('./datos.json', 'UTF-8');

    res.setHeader('Content-type', 'text/json');
    res.send(file);
});

//Determinar puerto:
app.listen(3000, function(){
    console.log('Servidor iniciado en el puerto 3000');
});
