//---------------------------------------------------------------------------------------------------------------------------//
// YAML:
//---------------------------------------------------------------------------------------------------------------------------//
//Import modules:
const fs = require('fs');
const yaml = require('js-yaml');

let settings = {};
try {
    let fileContents = fs.readFileSync('./settings.yaml', 'utf8');
    settings = yaml.load(fileContents);

    console.log(settings);
} catch (e) {
    console.log(e);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// Contenido del archivo settings.yaml:
//---------------------------------------------------------------------------------------------------------------------------//
db:
  host: 'localhost'
  port: 27017
  user: 'admin'
  pass: 'admin'
  name: 'crudmongodb'

jwt_credentials:
  A:
    id: '54a8ce618e91b0b13665e2f9'
    username: 'angular-frontend'
    password: 'clave.segura.1'
    time_exp: '1m'
  B:
    id: '605a3f8282d6f81a5bbbc57a'
    username: 'mobile-app'
    password: 'clave.segura.2'
    time_exp: '2d'

language: 'EN'

models:
  users: './models/users'
//---------------------------------------------------------------------------------------------------------------------------//
