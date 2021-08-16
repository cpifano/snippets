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
    //Permite concatenar observables (posee un límite de hasta 100 observables).
    //concat respeta el orden de los observables y los concatena uno al final del otro.
    const resultado = concat(timer, rango);

    //Observar contenido (Suscribirse):
    resultado.subscribe(data => console.log(data));
  }
}

//Merge:
//Existe un módulo llamado merge que tembién permite mezclar los observables, pero en este caso no respeta el orden.
//Merge une los observables cuando estos finalizan.
//---------------------------------------------------------------------------------------------------------------------------//
