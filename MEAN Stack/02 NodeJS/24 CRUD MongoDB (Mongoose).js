//---------------------------------------------------------------------------------------------------------------------------//
// MONGOOSE:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar Mongoose
// npm install mongoose --save
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Despachar archivos estáticos:
app.use(express.static(__dirname + '/public'));

//Crear conexion:
mongoose.connect('mongodb://usuario@contraseña@localhost:27017/nombre_db', {useNewUrlParser: true, useUnifiedTopology: true});
const conexion = mongoose.connection;

//Establecer mensaje de conexión exitosa:
conexion.once('open', () => {
    console.log('Conexión existosa');
});

//Establecer mensaje de error:
conexion.on('error', (error) => {
    console.log('Error al establecer cconexión con la base de datos: ', error);
})

//Definir modelo manualmente:
const usuarios = mongoose.model('usuarios', {nombre: String, apellido: String});

//INDEX
app.get('/', (req, res) => {

});

//INSERTAR:
app.post('/post_receiver', (req, res) => {
    //Cargar datos POST en el objeto modelo:
    const obj_usuario = new usuarios({nombre: req.body.nombre, apellido: req.body.apellido});

    //Guardar en MongoDB:
    obj_usuario.save()
    .then(doc, () => {
        res.json({response: 'success'});
        console.log('Guardado exitoso: ', doc);
    })
    .catch(error, () => {
        console.log('Error al intentar guardar en MongoDB: ', error.message);
        res.status(400).json({response: 'failed'});
    });
});

//LISTAR:
app.get('/get_datos', (req, res) => {
    //Hacer referencia directa a nuestro modelo para buscar:
    usuarios.find() //Params: .find({consulta}, 'proyeccion');
    .then(doc, () => {
        //Retornar todo el resultado de la consulta en JSON:
        res.json(doc);
    })
    .catch(error, () => {
        console.log('Error al consultar en MongoDB: ', error.message);
        res.status(400).json({response: 'failed'});
    });
});

//MODIFICAR:
app.get('/update/:id/:nombre/:apellido', (req, res) => {
    const id = req.params.id;
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;

    //Hacer referencia directa a nuestro modelo:
    usuarios.findByIdAndUpdate({_id:id},{
        $set:{
            nombre: nombre,
            apellido: apellido
        }
    })
    .then(doc, () => {
        res.json({response: 'success'});
        console.log('Guardado exitoso: ', doc);
    })
    .catch(error, () => {
        console.log('Error al actualizar registro en MongoDB: ', error.message);
        res.status(400).json({response: 'failed'});
    });
});

//ELIMINAR:
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;

     //Hacer referencia directa a nuestro modelo:
     usuarios.findByIdAndDelete({_id:id})
    .then(doc, () => {
        res.json({response: 'success'});
        console.log('Registro eliminado exitosamente: ', doc);
    })
    .catch(error, () => {
        console.log('Error al intentar eliminar registro en MongoDB: ', error.message);
        res.status(400).json({response: 'failed'});
    });
});

app.listen(3000, () => {
    console.log('Servidor web iniciado en puerto 3000.')
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ARCHIVO INDEX (PUBLIC):
//---------------------------------------------------------------------------------------------------------------------------//

//Contenido de archivo public/index.html:--------------------------------------------//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>appMongoose</title>
</head>
<body>
    <h3>MongoDB con Mongoose</h3>
    <form action="post_receiver" method="POST">
        <label>Nombre:</label>
        <input type="text" name="nombre" />
        <br/>
        <label>Apellido:</label>
        <input type="text" name="apellido" />
        <br/><br/>
        <input type="submit" value="Guardar" />
    </form>
</body>
</html>
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
