//---------------------------------------------------------------------------------------------------------------------------//
// BUFFER TIME:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    const timer = interval(500); //Medio segundo

    //Buffer Time:
    //Almacena datos hasta que se cumpla una condición.
    //Luego nos retornará todo el resultado del golpe en un Array.
    const buffer = timer.pipe(
      //Va a almacenar cada dos segundos:
      bufferTime(2000, 4000) //El buffer se emite cada 4 segundos.
    );

    //Observar contenido (Suscribirse):
    buffer.subscribe(dato => console.log(dato));
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
