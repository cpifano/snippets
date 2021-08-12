//---------------------------------------------------------------------------------------------------------------------------//
// INTERVAL Y TIMER:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulo de Reactive X:
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    //Crear un observable con interval:
    const contador = interval(1000); //Milisegundos

    //Observar contenido (Suscribirse):
    contador.suscribe((dato) => {
      console.log('Segundos: ' + dato);
    });


    //Crear un observable con timer (SetTimeOut):
    const contador = timer(1000); //Milisegundos

    //Observar contenido (Suscribirse):
    contador.suscribe((dato) => {
      console.log(`Cada ${dato} segundos`);
    });
  }
}

//---------------------------------------------------------------------------------------------------------------------------//
