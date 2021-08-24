//---------------------------------------------------------------------------------------------------------------------------//
// DEBOUNCE TIME:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs';

//Seleccionar input search del DOM:
const search = document.getElementById('IDtxtsearch');

//Detectar evento keyup del input search:
const obsKeyup = fromEvent(search, 'keyup');

//Agregar funcionalidades al observable:
obsKeyup.pipe(
  map((event: any) => event.currentTarget.value), //Obtener valor del imput
  debounceTime(1000) //Establecer el tiempo de espera para continuar (debounce time).
).subscribe((dato) => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
