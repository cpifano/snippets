//---------------------------------------------------------------------------------------------------------------------------//
// SUBJECT MULTICAST:
//---------------------------------------------------------------------------------------------------------------------------//
// Multicast se refiere a la entrega de datos de forma simultánea a un grupo de nodos receptores como destino, desde un
// emisor como origen. Por el contrario, en unicast un emisor se comunica con un único nodo receptor de destino.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { from, Subject, ConnectableObservable } from 'rxjs';
import { multicast } from 'rxjs/operators';

//Crear un observable con from:
const obsSource = from([1, 2, 3, 4]);

//Crear multicast:
//Anidar un subject.
const multi = obsSource.pipe(
  multicast(() => new Subject())
) as ConnectableObservable<any>; // Para evitar error de TS porque no reconoce el método connect()

//A partir de este momento podemos utilizar las múltiples suscripciones del subject:
multi.subscribe({
  next: (dato) => console.log(`Observer A: ${dato}`);
});

multi.subscribe({
  next: (dato) => console.log(`Observer B: ${dato}`);
});

//Conectar observable:
multi.connect();
//---------------------------------------------------------------------------------------------------------------------------//
