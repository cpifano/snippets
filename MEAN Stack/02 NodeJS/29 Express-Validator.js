//---------------------------------------------------------------------------------------------------------------------------//
// EXPRESS VALIDATOR:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const { body, validationResult } = require('express-validator');

//Ejecutar Express y retornar objeto:
const app = express();

//Configurar Middleware (ex bodyParser):
app.use(express.json());                            //Para analizar(parsing) application/json
app.use(express.urlencoded({ extended: true }));    //Para analizar(parsing) application/x-www-form-urlencoded

//Crear reglas de validación:
let validator = [
  //trim quita los espacios antes y después del string, isInt chequea si es un entero sino retornará el mensaje de error.
  body('id').trim().isInt().withMessage('El ID debe ser un número entero.'),
  body('email').trim().isEmail().withMessage('El dato ingresado no es un email válido.').normalizeEmail().toLowerCase(),
  body('password').trim().isLength(6).('El password es demasiado corto, mínimo 6 caracteres')
]

//INSERTAR:
app.post('/insert', validator, (req, res) => {
    //Cargar datos POST en el objeto modelo:
    const {id, email } = req.body;

    //Obtener resultado de la validación:
    const errors = validationResult(req);

    //Chequear resultado de la validación:
    if(!errors.isEmpty()){
      res.json({ 'message': 'Error durante la validación:' + errors.array() });
    } else {
      res.json({ 'message': 'Validación exitosa!' });
    }
});

//Determinar puerto:
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
//---------------------------------------------------------------------------------------------------------------------------//
