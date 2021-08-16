//---------------------------------------------------------------------------------------------------------------------------//
// SCAN:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    const source = of(1, 2, 3, 4, 5);

    //Scan: se comportará como un FOR de concatenación asíncrono:
    const obsScan = source.pipe(
      scan((acumulado, actual) => acumulado + actual, 0) //0 Valor inicial
    );

    //Observar contenido (Suscribirse):
    obsScan.subscribe((dato) => {
      console.log(dato);
    });

    //Resultado esperado:
    // 1
    // 3
    // 6
    // 10
    // 15
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
