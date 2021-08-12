//---------------------------------------------------------------------------------------------------------------------------//
// LOCAL STORAGE:
//---------------------------------------------------------------------------------------------------------------------------//
// LocalStorage permite almacenar datos en el navegador web. Y que estos persistan y estén disponibles durante la navegación
// en la aplicación web, hasta que esta información sea borrada del navegador.
// El almacenamiento solo puede eliminarse a través de JavaScript o borrando la memoria caché en el navegador.
// Los datos almacenados en el almacenamiento local pueden persistir durante mucho tiempo.
//---------------------------------------------------------------------------------------------------------------------------//
//Guardar datos en el navegador:
localStorage.setItem('nombre_archivo', 'Contenido del archivo.');

//Obtener valor de un archivo:
const fileValue = localStorage.getItem('nombre_archivo');

//Guardar objetos JS:
const objUsuario = {
  nombre: 'Camilo',
  apellido: 'Pifano'
};

localStorage.setItem('archivo_usuario', JSON.stringify(objUsuario));

//Obtener valor de un objeto JS:
const datosUsuario = JSON.parse(localStorage.getItem('archivo_usuario'));

//Borrar un archivo del navegador:
localStorage.removeItem('nombre_archivo');

//Borrar todos los archivos del navegador:
localStorage.clear();
//---------------------------------------------------------------------------------------------------------------------------//
