//---------------------------------------------------------------------------------------------------------------------------//
// INTRODUCCIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Rx - Reactive Extensions, es un conjunto de herramientas que permiten que los lenguajes de programación operen en
// secuencias de datos independientemente de si los datos son síncronos o asíncronos.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

const condicion_error: boolean = false;

//Observable:
//Es un objeto que representa de valores futuros.
const obsPrueba = new Observable(observer => {
  observer.next(1); //Se puede ingresar cualquier tipo de procesamiento dentro.
  observer.next(2); //Puede que el primero demore más y los siguientes pasos requieran algún dato de este.
  observer.next(3);
  observer.next(4);

  if(condicion){
    observer.error('Error del observable');
  }

  //Finalizo observador:
  observer.complete();
});

//Suscribe:
//La subscripción es la ejecución de un observable, permite observar contenido (Suscribirse).
//Al suscribirse al objeto, llama a toda su cadena de flujo.
const subsPrueba = obsPrueba.subscribe({
  next: dato => console.log(`El valor actual es: ${dato}`),
  error: error => console.error(`Error: ${error}`),
  complete: () => console.log('Suscripción finalizada')
})

//Unsubscribe:
//Desuscribirse del observable y liberar memoria del Garbage Collector de JS.
subsPrueba.unsubscribe();
//---------------------------------------------------------------------------------------------------------------------------//
