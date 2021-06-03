//---------------------------------------------------------------------------------------------------------------------------//
// DESTRUCTURACIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
//En ámbitos de Arreglos:
const numeros = [1, 2, 3];

//Sin destructuración
let uno = numero[0];
let dos = numero[1];
let tres = numero[2];

//Con destructuración:
//Guardará dinamicamente cada elemento.
const [uno, dos, tres] = numeros;

//Muestreo:
console.log(uno);

//---------------------------------------------------------------------------------------------------------------------------//
//En ámbitos de Objetos:
const persona = {
  nombre: 'Camilo',
  apellido: 'Pifano',
  activo: true
}

//Guardará dinamicamente cada propiedad:
//En el caso de las propiedades de objetos debe respetar estrictamente el nombre original.
const {nombre, apellido, activo} = persona;
//---------------------------------------------------------------------------------------------------------------------------//
