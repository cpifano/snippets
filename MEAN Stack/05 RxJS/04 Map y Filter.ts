//---------------------------------------------------------------------------------------------------------------------------//
// OPERATORS:
//---------------------------------------------------------------------------------------------------------------------------//
// Los operadores son funcionalidades inmutables las cuales nos permiten modificar el comportamiento y/o los datos procesados
// por un observable.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPERADOR MAP Y FILTER:
//---------------------------------------------------------------------------------------------------------------------------//
// Nos permite procesar/modificar datos de un observable y retornar el dato procesado/modificado a la siguiente operación.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos de Reactive X:
import { pipe, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

//Función of:
//Crea un observable a partir de una lista de elementos.
const obsNumeros = of(1, 2, 3, 4, 5);

//Función pipe:
//Permite agregar una cantidad X de operadores y/o funciones a un observable.
obsNumeros.pipe(
  //Map:
  //Nos permite procesar/modificar datos de un observable y retornar el dato procesado/modificado a la siguiente operación.
  map(valor => { return valor * 10; }),

  //La siguiente operacion recibirá los valores del map anterior (10, 20, 30, 40, 50):
  map(segundo_valor => { return valor / 2; }),

  //Filter:
  //Permite filtrar elementos.
  //Si cumple una condición envía el dato al siguiente operador sino no envía nada.
  //Esta operación recibe los valores del map anterior (5, 10, 15, 20, 25).
  filter((tercer_valor: number) => tercer_valor % 2 === 0), //Función modulo para filtrar elementos pares.
);

//Observar contenido (Suscribirse):
obsNumeros.subscribe((data) => {
  //Mostrar resultados de operación al cuadrado de elementos pares:
  console.log('Valor: ' + data);
});

//Resultado esperado:
// Valor: 10
// Valor: 20
//---------------------------------------------------------------------------------------------------------------------------//
