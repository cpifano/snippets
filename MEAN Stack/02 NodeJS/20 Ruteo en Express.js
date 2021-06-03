//---------------------------------------------------------------------------------------------------------------------------//
// ROUTEO EN EXPRESS:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');

//Ejecutar Express y retornar objeto:
const app = express();

//Este metodo se va a activar cuando nuestro servidor reciba una solicitud GET:
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

//Determinar otro directorio /pagina:
app.get('/pagina', (req, res) => {
    res.send('Estas en otra página');
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//
