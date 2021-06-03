//---------------------------------------------------------------------------------------------------------------------------//
// BCRYPT - LOGIN & MODEL:
//---------------------------------------------------------------------------------------------------------------------------//

//###########################################################################################################################//
// ARCHIVO MAIN.JS:
//###########################################################################################################################//
//Importar módulos:
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');

//Importar módulo de usuarios:
const usuarios   = require('./user');

//Crear objeto express:
const app = express();

//Configurar BodyParser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Despachar archivos estáticos:
app.use(express.static(path.join(__dirname, '/public')));

//Definir Mongo URI:
const mongo_uri = 'mongodb://usuario:pass@localhost/nombre_db';

//Crear y validar conexión MongoDB:
mongoose.connect(mongo_uri, (error) => {
    if(error){
        throw error;
    } else {
        console.log('Conexión satisfactoria con: ' + mongo_uri);
    }
})

//INDEX
app.get('/', (req, res) => {

});

//REGISTRAR:
app.post('/register', (req, res) => {
    //Capturar datos de POST:
    const {username, password} = req.body;

    //Crear objeto (Set datos):
    const usuario = new usuarios({username, password});

    //Guardar en MongoDB:
    usuario.save(error, () => {
        if(error){
            res.status(500).send('Error al registrar al usuario.');
        } else {
            res.status(200).send('Usuario registrado.');
        }
    });
});

//AUTENTICAR:
app.post('/autenticate', (req, res) => {
    //Capturar datos de POST:
    const {username, password} = req.body;

    //Usar modelo de forma directa:
    usuarios.findOne({username}, (error, usuario) => {
        if(error){
            res.status(500).send('Error al autenticar el usuario.');
        } else if(!usuario) {
            res.status(500).send('El usuario NO existe.');
        } else {
            //Utilizar método de validación de password:
            usuario.isCorrectPassword(password, (error, result) => {
                if(error){
                    res.status(500).send('Error de autenticación.');
                } else if(result) { //Validar resultado.
                    res.status(200).send('Usuario autenticado.')
                } else {
                    res.status(500).send('Usuario y/o contraseña incorrecta.');
                }
            })
        }
    });
});

//Definir puerto:
app.listen(3000, () => {
    console.log('Servidor web iniciado en puerto 3000.')
});

//Exportar módulo de la app:
module.exports = app;
//###########################################################################################################################//


//###########################################################################################################################//
// ARCHIVO USER.JS:
//###########################################################################################################################//
//Importar módulos:
const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');

//Establecer cantidad de repetición del algoritmo (SALT):
const saltRounds = 10;

//Definir esquema de la clase usuario:
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//Método para encriptar password (bcrypt):
//pre (mongoose): nos permite realizar una ejecución previo a la operación de guardado.
UserSchema.pre('save', (next) => {
    //Validar si es nuevo usuario o si se está modificando el password:
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password, saltRounds, (error, hashedPassword) => {
            if(error){
                next(error);
            } else {
                //En caso de que no se registren errores:
                //Sustituimos el password ingresado por el password encriptado.
                document.password = hashedPassword;
                next();
            }
        })
    } else {
        next(); //En caso de que no sea ningun caso permitir que siga hacia la siguiente función.
    }
});

//Crear un Método para validar el password:
UserSchema.methods.isCorrectPassword = (password, callback) => {
    bcrypt.compare(password, this.password, (error, same) => {
        if(error){
            callback(error);
        } else {
            callback(error, same);
        }
    });
}

//Exportar módulo:
module.exports = mongoose.model('usuarios');
//###########################################################################################################################//


//###########################################################################################################################//
// ARCHIVO PUBLIC/INDEX.HTML
//###########################################################################################################################//
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
    </head>
    <body>
        <form action="/autenticate" method="POST">
            <label>Usuario</label><br/>
            <input type="text" name="usuario" />
            <br/><br/>

            <label>Contraseña</label><br/>
            <input type="password" name="password" />
            <br/><br/>

            <input type="submit" value="Ingresar" /><br/>
            <a href="register.html">Registrarse</a>
        </form>
    </body>
</html>
//###########################################################################################################################//


//###########################################################################################################################//
// ARCHIVO PUBLIC/REGISTER.HTML
//###########################################################################################################################//
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registro de usuarios</title>
    </head>
    <body>
        <form action="/register" method="POST">
            <label>Usuario</label><br/>
            <input type="text" name="usuario" />
            <br/><br/>

            <label>Contraseña</label><br/>
            <input type="password" name="password" />
            <br/><br/>

            <input type="submit" value="Registrar usuario" /><br/>
            <a href="index.html">Iniciar sesión</a>
        </form>
    </body>
</html>
//###########################################################################################################################//
