//---------------------------------------------------------------------------------------------------------------------------//
// FROM EVENT:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { fromEvent } from 'rxjs';

//Seleccionar elemento del DOM:
const dom_element = document.getElementById('IDdivElemento');

//Crear observable desde fromEvent:
const mouseMove = fromEvent(dom_element, 'mousemove');

//Observar contenido (Suscribirse):
mouseMove.subscribe((event: MouseEvent) => {
  console.log(`Coordenadas X: ${event.clientX}, Y: ${event.clientY}`);
});
//---------------------------------------------------------------------------------------------------------------------------//
