//---------------------------------------------------------------------------------------------------------------------------//
// CONCAT Y MERGE:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos de Reactive X:
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

//Crear un observable con timer:
const obsTimer = interval(1000).pipe(
  //Multiplicar 4 veces el observable:
  take(4)
);

//Range:
//Crea un observable en basado en un rango.
const obsRango = range(1, 10); //Cuenta de 1 a 10

//Concat:
//Permite concatenar observables (posee un límite de hasta 100 observables).
//concat respeta el orden de los observables y los concatena uno al final del otro.
const obsResultado = concat(obsTimer, obsRango);

//Merge:
//Existe un módulo llamado merge que tembién permite mezclar los observables, pero en este caso no respeta el orden.
//Merge une los observables cuando estos finalizan
const obsResultado = merge(obsTimer, obsRango);

//Observar contenido (Suscribirse):
obsResultado.subscribe(data => console.log(data));
//---------------------------------------------------------------------------------------------------------------------------//
