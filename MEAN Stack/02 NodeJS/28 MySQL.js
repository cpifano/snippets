//---------------------------------------------------------------------------------------------------------------------------//
// MySQL:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar MySQL:
// npm install mysql --save
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const mysql      = require('mysql');

//Crear conexión:
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'clave.123',
  database : 'nombre_database'
});

//Establecer conexión:
connection.connect((error) => {
  if (error) {
    console.error('Error al intentar establecer la conexión: ' + error.stack);
    return;
  }

  console.log('Conexión al servidor de bases de datos existosa. ID: ' + connection.threadId);
});

//SELECT:
connection.query('SELECT * FROM nombre_tabla', (error, result, fields) => {
  if(error) throw error;
  console.log('Resultado: ', result);
});

//INSERT:
const usuario = { nombre: 'Camilo', apellido: 'Pifano' };

connection.query('INSERT INTO usuarios SET ?', usuario, (error, result) => {
  if(error) throw error;
  console.log('Guardado existoso, ID:', result.insertId);
});

//UPDATE:
connection.query('UPDATE usuarios SET nombre = ? Where ID = ?', ['Lorenzo', 3], (error, result) => {
    if (error) throw error;
    console.log(`Se modificarón ${result.changedRows} registro(s)`);
  }
);

//DELETE:
connection.query('DELETE FROM usuarios WHERE id = ?', [5], (error, result) => {
    if (error) throw error;
    console.log(`Se eliminaron ${result.affectedRows} registro(s)`);
  }
);

//Cerrar conexión:
connection.end();
//---------------------------------------------------------------------------------------------------------------------------//
