//---------------------------------------------------------------------------------------------------------------------------//
// ROUTER:
//---------------------------------------------------------------------------------------------------------------------------//
// La funcionalidad de ruteo que brinda el módulo de express nos permite modularizar las rutas que pueda tener nuestra API
// para proveer sus distintos servicios.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');

//Importar nuestro Router:
const usersRouter = require('./routers/usuarios');

//Crear app de express:
const app = express();

//Registrar Middleware:
app use(express.json());

//Registrar paths de mi app en mi router (Middleware):
app.use('/usuarios', usersRouter);

//Determinar puerto:
app.listen(3000, function(){
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Contenido de archivo /routers/usuarios.js
//Importar módulos:
const express = require('express');

//Crear Router:
const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'create',
    });
});

router.get('/', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'getAll',
    });
});

router.put('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'update',
    });
});

router.get('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'findOne',
    });
});

router.delete('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'delete',
    });
});

//Exportar nuestro router:
module.exports = router;
//---------------------------------------------------------------------------------------------------------------------------//
