//---------------------------------------------------------------------------------------------------------------------------//
// FORK JOIN:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { forkJoin, of, interval } from 'rxjs';

//forkJoin:
//Es un operador de combinación que nos permite fusionar un numero ilimitado de observables.
//Solamente emite un array con los valores finales y una vez que todos los observables terminan.
const fork = forkJoin([
  of('Hola'),     //Observable 01
  of('Mundo'),    //Observable 02
  interval(1000), //Observable 03
]);

//Observar contenido (Suscribirse):
fork.subscribe(dato => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
