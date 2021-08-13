//---------------------------------------------------------------------------------------------------------------------------//
// TAP:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulos de Reactive X:
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    //Crear observable desde fromEvent:
    //fromEvent no tiene funciones parametrales observables de Reactive X (No puedo manejar errores, o detectar complete).
    const clicks = fromEvent(document, 'click');

    //Método pipe de un observable (fromEvent):
    //Me permite concatenar al observable otras funciones observables:
    const positions = clicks.pipe(

      //Tap: Nos permite adicionar elementos parametrados a observables no parametrados como fromEvent.
      tap(
        event => console.log(`Procesado: ${event}`),
        error => console.error(`Error: ${error}`),
        //Complete:
        () => console.log('Proceso completo')
      );
    );

    //Observar contenido (Suscribirse):
    positions.subscribe(pos => console.log(pos));
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
