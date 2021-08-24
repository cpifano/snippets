//---------------------------------------------------------------------------------------------------------------------------//
// SHARE:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos de Reactive X:
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

//Crear un observable con timer (SetTimeOut):
const obsContador = timer(1000); //Milisegundos

//Concatenar funciones Rx al observable con pipe:
const obsResultado = obsContador.pipe(
  tap(() => console.log('TAP ON')),

  //mapTo:
  //Nos permite mapear los resultados y termina la operación.
  mapTo('Fin Observable')
);

//Share:
//No genera un observable, sino que vincula/comparte los observables.
const obsShare = obsResultado.pipe(share());

//Observar contenido (Suscribirse):
const subsciption_01 = obsShare.subscribe(pos => console.log(pos));
const subsciption_02 = obsShare.subscribe(pos => console.log(pos));

//RESULTADO ESPERADO:
// TAP ON
// TAP ON
// Fin Observable

// Esto se debe a que el observable está vinculado/compartido y la única
// parte observable del ejemplo es tap.
// mapTo como termina la operación solo aparecerá una sola vez para el
// observable y en este caso el observable es compartido.
//---------------------------------------------------------------------------------------------------------------------------//
