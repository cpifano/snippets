//---------------------------------------------------------------------------------------------------------------------------//
// INTRODUCCIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Rx - Reactive Extensions, es un conjunto de herramientas que permiten que los lenguajes de programación operen en
// secuencias de datos independientemente de si los datos son síncronos o asíncronos.
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Crear mi Observable:
  obs:any;

  ngOnInit(): void {
    this.obs = Observable.create(function (observer) {
      observer.next(1); //Se puede ingresar cualquier tipo de procesamiento dentro.
      observer.next(2); //Puede que el primero demore más y los siguientes pasos requieran algún dato de este.
      observer.next(3);

      //Establezco una espera manual de 1 segundo:
      setTimeout(() => {
        observer.next(4);
        observer.complete(); //Finalizo observador
      }, 1000);
    });
  }

  //Creo una función:
  fnRxJS(){

    //Suscribe:
    //Al suscribir el objeto, llama a toda su cadena de flujo:
    this.obs.suscribe({
      next: x => console.log('Valor: ' + x), //Obtengo los valores de retorno (1,2,3,4).
      error: err => console.error('Error inesperado: ' + err),
      complete: () => console.log('Completo');
    });

    //Desuscribirse del objeto es recomentable al momento de destrución del componente (ngOnDestroy).
    this.obs.unsuscribe();

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
