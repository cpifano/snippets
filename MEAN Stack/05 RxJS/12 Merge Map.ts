//---------------------------------------------------------------------------------------------------------------------------//
// MERGE MAP:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

//Crear observable con of:
const obsSource = of(2000, 1000, 3000);

//mergeMap:
//Recibe información de las operaciones anteriores y retorna un observable como respuesta.
//Al igual que merge, emitirá el orden en base a que terminen los resultados (No respeta el orden de la secuencia).
//Esto hace que mergeMap sea levemente más rápido que concatMap.
const obsMergeMap = obsSource.pipe(
  mergeMap(dato => of(`Valor: ${dato}`)).pipe(delay(dato))
);

//Observar contenido (Suscribirse):
obsMergeMap.subscribe(dato => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
