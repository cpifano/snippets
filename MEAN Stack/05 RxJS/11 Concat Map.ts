//---------------------------------------------------------------------------------------------------------------------------//
// CONCAT MAP:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

//Crear observable con of:
const obsSource = of(2000, 1000, 3000);

//concatMap:
//Concatena los datos de los observables y permite mapearlos en el proceso.
const obsConcatMap = obsSource.pipe(
  concatMap(dato => of(`Valor: ${dato}`)).pipe(delay(dato))
);

//Observar contenido (Suscribirse):
obsConcatMap.subscribe(dato => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
