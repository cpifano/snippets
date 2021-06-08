//---------------------------------------------------------------------------------------------------------------------------//
// REACTIVE X (RxJS):
//---------------------------------------------------------------------------------------------------------------------------//
// Es una API que nos brinda funcionalidades para establecer procesamientos de funciones y datos de forma asíncrona.
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

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
    console.log('INICIO suscripción');

    //Al suscribir el objeto, llama a toda su cadena de flujo:
    this.obs.suscribe({
      next: x => console.log('Valor: ' + x), //Obtengo los valores de retorno (1,2,3,4).
      error: err => console.error('Error inesperado: ' + err),
      complete: () => console.log('Completo');
    });

    console.log('FIN suscripción');
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Ejecutar una función sincrona de forma asincróna:
//Importar módulo de Reactive X:
import { Observable,of } from 'rxjs';

//Función síncrona:
getDatosSync(){
  //...//
  obs.suscribe((data) => {
    console.log(data);
  });
  //...//
}

//La función getDatos es un Observable subtipo Usuarios:
getDatos(): Observable<Usuarios>{
  return of(DATOS);
}
//---------------------------------------------------------------------------------------------------------------------------//
