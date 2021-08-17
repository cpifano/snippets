//---------------------------------------------------------------------------------------------------------------------------//
// INTRODUCCIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Rx - Reactive Extensions, es un conjunto de herramientas que permiten que los lenguajes de programación operen en
// secuencias de datos independientemente de si los datos son síncronos o asíncronos.
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    const condicion_error: boolean = false;

    //Crear mi Observable:
    const obsPrueba = new Observable(observer => {
      observer.next(1); //Se puede ingresar cualquier tipo de procesamiento dentro.
      observer.next(2); //Puede que el primero demore más y los siguientes pasos requieran algún dato de este.
      observer.next(3);
      observer.next(4);

      if(condicion){
        observer.error('Error del observable');
      }

      //Finalizo observador:
      observer.complete();
    });

    //Suscribe:
    //Al suscribir el objeto, llama a toda su cadena de flujo:
    const subsPrueba = obsPrueba.subscribe({
      next: dato => console.log(`El valor actual es: ${dato}`),
      error: error => console.error(`Error: ${error}`),
      complete: () => console.log('Suscripción finalizada')
    })

    //Desuscribirse del observable y liberar memoria del Garbage Collector de JS:
    subsPrueba.unsubscribe();
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
