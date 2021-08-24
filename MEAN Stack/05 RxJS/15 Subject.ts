//---------------------------------------------------------------------------------------------------------------------------//
// SUBJECT:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { Subject } from 'rxjs';

//Subject:
//Es una especie de observable que puede poseer multiples suscripciones.
//Puede ser muy útil cuando tenemos un solo observable del cual queremos hacer muchas ramificaciones de datos.
const objSubject = new Subject;

//Si solo va a recibir valores de un tipo (numérico):
const objSubject = new Subject<number>();

//Crear suscripciones (comportamiento):
objSubject.subscribe({
  next: (dato) => console.log('Observable A: ' + dato),
});

objSubject.subscribe({
  next: (dato) => console.log('Observable B: ' + dato),
});

//Envíar observables (Enviar datos a mis suscripciones):
objSubject.next(1);
objSubject.next(2);
//---------------------------------------------------------------------------------------------------------------------------//
