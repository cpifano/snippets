//---------------------------------------------------------------------------------------------------------------------------//
// MAP y FILTER:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulos de Reactive X:
import { pipe, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    //Of:
    //Crea una lista de elementos.
    const nums = of(1, 2, 3, 4, 5);


    //Crear observable desde la funcion pipe:
    //pipe: Fusiona una x cantidad de funciones de observables.
    const alCuadrado = pipe(
      //Funciones:

      //Filter: Filtra elementos.
      filter((n: number) => n % 2 === 0), //Si cumple devuelve true sino false (Función modulo, elementos pares)

      //Map:
      //Realiza una operacion matematica que sea muy grande como para hacerla con un observable.
      map(n => n * n) //Hacer operación al cuadrado solo de los elementos pares filtrados previamente.
    );

    //Crear elemento observable:
    const cuadrado = alCuadrado(nums);

    //Observar contenido (Suscribirse):
    cuadrado.suscribe((data) => {
      //Mostrar resultados de operación al cuadrado de elementos pares:
      console.log('Resultado:' + data);
    });
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
