//---------------------------------------------------------------------------------------------------------------------------//
// REPLAY SUBJECT Y BEHAVIOR SUBJECT:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { ReplaySubject } from 'rxjs';

//ReplaySubject:
//Crea un Observable buffer al cual podemos enviarle valores de forma posterior.
const obsReplay = new ReplaySubject(4); //Tamaño de buffer.

//Enviar valores a mi Observable:
obsReplay.next(1);
obsReplay.next(2);
obsReplay.next(3);
obsReplay.next(4);
obsReplay.next(5);
obsReplay.next(6);

//Observar contenido (Suscribirse):
//Va a mostrar los últimos 4 datos (next).
obsReplay.subscribe(dato => console.log(dato));

//Resultado esperado:
// 3
// 4
// 5
// 6
//---------------------------------------------------------------------------------------------------------------------------//
// El Observable BehaviorSubject funciona de la misma forma que Replay Subject
// pero a diferencia de que solo muestra el último valor.
// Como si utilizaramos ReplaySubject(1), aunque BehaviorSubject si el valor es nulo
// lo mostrará y ReplaySubject no.
//---------------------------------------------------------------------------------------------------------------------------//
