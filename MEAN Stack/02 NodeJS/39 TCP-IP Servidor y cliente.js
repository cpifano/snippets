//---------------------------------------------------------------------------------------------------------------------------//
// TCP-IP - SERVER:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar modulos:
const net = require('net');

//Crear Servidor TCP:
const server = net.createServer();

//Abrir socket:
server.on('connection', (socket) => {
  //Interceptar datos recibidos:
  socket.on('data', (data) = {
    //Enviar mensaje recibido a la consola del servidor:
    console.log('Mensaje recibido desde el cliente: ' + data);

    //Enviar respuesta al cliente:
    socket.write('Mensaje recibido exitosamente.');
  });

  //Enviar mensaje al cierre de socket (Fin de comunicación):
  socket.on('close', () => {
    //Enviar información a la consola del servidor:
    console.log('Comunicación finalizada.');
  });

  //Interceptar errores:
  socket.on('error', (error) => {
    //Enviar mensaje de error a la consola del servidor:
    console.log('Error: ' + error.message);

    //Enviar mensaje de error al cliente:
    socket.write('Error: ' + error.message);
  });
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TCP-IP - CLIENT:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar modulos:
const net = require('net');

//Establecer parámetros del servidor TCP:
const serverTCP = {
  port: 4000,
  host: '127.0.0.1'
};

//Crear cliente TCP:
const client = net.createConnection(serverTCP);

//Establecer conexión con el servidor TCP:
client.on('connect', () => {
  //Enviar mensaje a la consola del cliente:
  console.log('Conexión establecida de forma exitosa.');

  //Enviar mensaje al servidor TCP:
  client.write('Hola mundo!');

  //Cerrar conexión (Finalizar comunicación):
  client.end();
});

//Interceptar errores:
client.on('error', (error) => {
  //Enviar mensaje de error a la consola del cliente:
  console.log('Error: ' + error.message);
});
//---------------------------------------------------------------------------------------------------------------------------//
