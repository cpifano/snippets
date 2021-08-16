//---------------------------------------------------------------------------------------------------------------------------//
// CONCAT MAP:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {

    const source = of(2000, 1000, 3000);

    //concatMap:
    //Concatena los datos de los observables y permite mapearlos en el proceso.
    const obsConcatMap = source.pipe(
      concatMap(dato => of(`Valor: ${dato}`)).pipe(delay(dato))
    );

    //Observar contenido (Suscribirse):
    obsConcatMap.subscribe(dato => console.log(dato));
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
