//---------------------------------------------------------------------------------------------------------------------------//
// WEB WORKERS:
//---------------------------------------------------------------------------------------------------------------------------//
// Los Web Workers permiten ejecutar cálculos intensos de CPU en un subproceso en segundo plano, liberando el subproceso
// principal para actualizar la interfaz de usuario (Evitar dejar la interfaz inoperante [colgada]).
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Web Worker:
ng generate web-worker nombre_worker

//Contenido del archivo "nombre_worker.worker.ts":
addEventListener('message', ({ data }) => {
  const response = `Hola ${data}`;

  //Retornar información desde el Web Worker:
  postMessage(response);
});

//Utilización del Web Worker en un componente:
if (typeof Worker !== 'undefined') {
  //Crear un objeto worker ubicando el archivo generado por el cli:
  const worker = new Worker(new URL('./nombre_worker.worker', import.meta.url));

  //Abrir un listener que escuche los mensajes del objeto worker:
  //Esto es necesario ya que el worker corre en otro hilo separado al hilo de la aplicación.
  worker.onmessage = ({ data }) => {
    console.log(`Respuesta desde el worker: ${data}`);
  };

  //Ejecutar Web Worker pasando un parametro:
  worker.postMessage('Juan');
} else {
  // Los Web Workers no son compatibles con este entorno.
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// Notas:
//---------------------------------------------------------------------------------------------------------------------------//
// Es importante dejar en claro que lo ideal es que los Web Workers sean utilizados desde un servicio que luego este esté
// inyectado sobre uno o varios componentes.
// Esto permitirá la posibilidad de obtener el dato procesado por el worker sin que el usuario deba detenerse dentro de
// un componente en particular.
//
// Otra cosa importante a detallar es que los Web Workers son simplemente scripts que corren en un hilo paralelo de la
// aplicación y por ende no tienen acceso al DOM de la misma.
//---------------------------------------------------------------------------------------------------------------------------//
