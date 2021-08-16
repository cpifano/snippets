//---------------------------------------------------------------------------------------------------------------------------//
// SWITCH MAP:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    //Crear observable desde fromEvent:
    fromEvent(document, 'click').pipe(
      //switchMap:
      //Interrumpe un observable mientras lo mapea (corta y reinicia).
      switchMap(() => {
        interval(1000)
      }).subscribe(console.log())
    );
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
