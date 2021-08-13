//---------------------------------------------------------------------------------------------------------------------------//
// SHARE:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulos de Reactive X:
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    //Crear un observable con timer (SetTimeOut):
    const contador = timer(1000); //Milisegundos

    //Concatenar funciones Rx al observable con pipe:
    const obs = time.pipe(
      tap(() => console.log('TAP ON')),

      //mapTo:
      //Nos permite mapear los resultados y termina la operación.
      mapTo('Fin Observable')
    );

    //Share: No genera observable, vincula/comparte los observables.
    const shareObs = obs.pipe(share());

    //Observar contenido (Suscribirse):
    const subsciption_01 = shareObs.subscribe(pos => console.log(pos));
    const subsciption_01 = shareObs.subscribe(pos => console.log(pos));

    //RESULTADO ESPERADO:
    // TAP ON
    // TAP ON
    // Fin Observable

    // Esto se debe a que el observable está vinculado/compartido y la única
    // parte observable del ejemplo es tap.
    // mapTo como termina la operación solo aparecerá una sola vez para el
    // observable y en este caso el observable es compartido.
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
