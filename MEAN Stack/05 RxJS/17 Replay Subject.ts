//---------------------------------------------------------------------------------------------------------------------------//
// REPLAY SUBJECT Y BEHAVIOR SUBJECT:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    //Crear un Observable buffer:
    const obs = new ReplaySubject(4); //Tamaño de buffer.

    //Enviar valores a mi Observable:
    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.next(4);
    obs.next(5);
    obs.next(6);

    //Observar contenido (Suscribirse):
    //Va a mostrar los últimos 4 datos (next).
    obs.subscribe(dato => console.log(dato));

    //Resultado esperado:
    // 3
    // 4
    // 5
    // 6

    // El Observable BehaviorSubject funciona de la misma forma que Replay Subject
    // pero a diferencia de que solo muestra el último valor.
    // Como si utilizaramos ReplaySubject(1), aunque BehaviorSubject si el valor es nulo
    // lo mostrará y ReplaySubject no.
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
