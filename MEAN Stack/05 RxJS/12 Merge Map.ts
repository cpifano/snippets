//---------------------------------------------------------------------------------------------------------------------------//
// MERGE MAP:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {

    const source = of(2000, 1000, 3000);

    //mergeMap:
    //Mezcla los datos de los observables y permite mapearlos en el proceso pero no respeta el orden.
    //Al igual que merge, emitirá el orden en base a que terminen los resultados.
    //Esto hace que mergeMap sea levemente más rápido que concatMap.
    const obsMergeMap = source.pipe(
      mergeMap(dato => of(`Valor: ${dato}`)).pipe(delay(dato))
    );

    //Observar contenido (Suscribirse):
    obsMergeMap.subscribe(dato => console.log(dato));
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
