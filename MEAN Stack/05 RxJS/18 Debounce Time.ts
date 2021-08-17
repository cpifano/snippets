//---------------------------------------------------------------------------------------------------------------------------//
// DEBOUNCE TIME:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar módulo de Reactive X:
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    //Seleccionar imput search del DOM:
    const search = document.getElementById('IDtxtsearch');

    //Detectar evento keyup del input search:
    const keyup = fromEvent(search, 'keyup');

    //Agregar funcionalidades al observable:
    keyup.pipe(
      map((event: any) => event.currentTarget.value), //Obtener valor del imput
      debounceTime(1000) //Establecer el tiempo de espera para continuar (debounce time).
    ).subscribe((dato) => console.log(dato));
  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//
