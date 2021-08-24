//---------------------------------------------------------------------------------------------------------------------------//
// TAP Y MAP TO:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos de Reactive X:
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

//Crear observable desde fromEvent:
//fromEvent no tiene funciones parametrales observables de Reactive X (No puedo manejar errores, o detectar complete).
const obsClicks = fromEvent(document, 'click');

//Método pipe de un observable (fromEvent):
//Me permite concatenar al observable otras funciones observables:
const obsPositions = obsClicks.pipe(

  //Tap:
  //Nos permite adicionar elementos parametrados a observables no parametrados como fromEvent.
  tap(
    event => console.log(`Procesado: ${event}`),
    error => console.error(`Error: ${error}`),
    //Complete:
    () => console.log('Proceso completo')
  );
);

//Observar contenido (Suscribirse):
obsPositions.subscribe(pos => console.log(pos));
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MAP TO:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos de Reactive X:
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

//Crear observable desde fromEvent:
const obsClicks = fromEvent(document, 'click');

//Map To:
//Nos permite mapear y/o reemplazar un valor constante (el mismo), para cada paso del observable.
const obsSaludo = obsClicks.pipe(
  mapTo('Hola mundo!'), //Cada vez que haga click devolverá el mensaje "Hola mundo!".
);

//Observar contenido (Suscribirse):
obsSaludo.subscribe(pos => console.log(pos));
//---------------------------------------------------------------------------------------------------------------------------//
