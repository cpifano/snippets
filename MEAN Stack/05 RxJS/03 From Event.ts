//---------------------------------------------------------------------------------------------------------------------------//
// FROM EVENT:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar módulo de Reactive X:
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const dom_element = document.getElementById('IDdivElemento');

    //Crear observable desde fromEvent:
    const mouseMove = fromEvent(dom_element, 'mousemove');

    //Observar contenido (Suscribirse):
    mouseMove.suscribe((event: MouseEvent) => {
      console.log(`Coordenadas X: ${event.clientX}, Y: ${event.clientY}`);
    });
  }
}

//Contenido del archivo app.component.html:------------------------------------------//
<div id="IDdivElemento"></div>
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
