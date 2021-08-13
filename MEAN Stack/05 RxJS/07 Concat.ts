//---------------------------------------------------------------------------------------------------------------------------//
// CONCAT:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulos de Reactive X:
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    //Crear un observable con timer:
    const timer = interval(1000).pipe(
      //Multiplicar 4 veces el observable:
      take(4)
    );

    //Crear un observable con range:
    //range: crea un observable en basado en un rango.
    const rango = range(1, 10); //Cuenta de 1 a 10

    //concat:
    //Permite concatenar observables:
    const resultado = concat(timer, rango);

    //Observar contenido (Suscribirse):
    resultado.subscribe(data => console.log(data));
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
