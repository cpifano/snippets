//---------------------------------------------------------------------------------------------------------------------------//
// BUFFER TIME:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

//Crear un observable con timer:
const obsTimer = interval(500); //Medio segundo

//Buffer Time:
//Crea un observable que almacena un buffer de datos hasta que se cumpla una condición.
//Luego nos retornará todo el resultado del golpe en un Array.
const obsBuffer = obsTimer.pipe(
  //Va a almacenar cada dos segundos:
  bufferTime(2000, 4000) //El buffer se emite cada 4 segundos.
);

//Observar contenido (Suscribirse):
obsBuffer.subscribe(dato => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
