//---------------------------------------------------------------------------------------------------------------------------//
// CATCH ERROR:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de Reactive X:
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//Crear un observable con of:
const obsSaludo = of('Hola', 'mundo', 'Hello world');

//Crear un nuevo observable en base a la secuencia pipe:
const obsResultado = obsSaludo.pipe(
  //Simular un error con map para el ejemplo:
  map((valor) => {
    if(valor == 'Hello world') {
      throw 'Error esperado';
    }
  }),

  //Catch Error:
  //Nos permite capturar un error para poder manejarlo desde un pipe.
  catchError((err) => {
    console.error('Error: ' + err);
  })
);

//Observar contenido (Suscribirse):
obsResultado.subscribe(dato => console.log(dato));
//---------------------------------------------------------------------------------------------------------------------------//
