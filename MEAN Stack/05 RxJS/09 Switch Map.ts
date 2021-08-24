//---------------------------------------------------------------------------------------------------------------------------//
// SWITCH MAP:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//Crear observable desde fromEvent:
fromEvent(document, 'click').pipe(

  //switchMap:
  //Interrumpe un observable mientras lo mapea (corta y reinicia).
  switchMap(() => {
    interval(1000)
  }).subscribe(console.log())

);
//---------------------------------------------------------------------------------------------------------------------------//
