//---------------------------------------------------------------------------------------------------------------------------//
// INTERVAL Y TIMER:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { interval, timer } from 'rxjs';

//Interval:
//Crea un observable que entrega un valor cada cierto intervalo de tiempo.
const contador = interval(1000); //Milisegundos

//Observar contenido (Suscribirse):
contador.subscribe((dato) => {
  console.log('Segundos: ' + dato);
});

//Crear un observable con timer (SetTimeOut):
const contador = timer(1000); //Milisegundos

//Observar contenido (Suscribirse):
contador.subscribe((dato) => {
  console.log(`Cada ${dato} segundos`);
});
//---------------------------------------------------------------------------------------------------------------------------//
