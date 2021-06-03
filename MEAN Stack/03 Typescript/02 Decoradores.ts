//---------------------------------------------------------------------------------------------------------------------------//
// DECORADORES:
//---------------------------------------------------------------------------------------------------------------------------//
// Los decoradores sirven para extender y heredar las funcionalidades de un elemento a otro con la funcionalidad
// de sacar el máximo aprovechamiento del elemento extendido y posibilitando mejorarlo.
//---------------------------------------------------------------------------------------------------------------------------//
//Decorador de clase:
function Bienvenida(target: Function): void {
  target.prototype.saludo = function (): void {
    console.log('Hola mundo');
  }
}

//Decorador (@):
@Bienvenida
class Saludar {
  constructor() {
    //Implementación
  }
}

let miSaludo = new Saludar();
miSaludo.saludo(); //Se mostrará 'Hola mundo' en la consola.
//---------------------------------------------------------------------------------------------------------------------------//
