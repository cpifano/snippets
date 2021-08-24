//---------------------------------------------------------------------------------------------------------------------------//
// SCAN:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

//Crear observable con of:
const obsSource = of(1, 2, 3, 4, 5);

//Scan:
//Se comportará como un FOR de concatenación asíncrono.
const obsScan = obsSource.pipe(
  scan((acumulado, actual) => acumulado + actual, 0) //0 Valor inicial
);

//Observar contenido (Suscribirse):
obsScan.subscribe((dato) => {
  console.log(dato);
});

//Resultado esperado:
// 1
// 3
// 6
// 10
// 15
//---------------------------------------------------------------------------------------------------------------------------//
