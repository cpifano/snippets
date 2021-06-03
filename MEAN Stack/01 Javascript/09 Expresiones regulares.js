//---------------------------------------------------------------------------------------------------------------------------//
// EXPRESIONES REGULARES:
//---------------------------------------------------------------------------------------------------------------------------//
// Secuencias de caracteres que representan un patrón de búsqueda.
//---------------------------------------------------------------------------------------------------------------------------//
let parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//Crear expresiones regulares:
//i Case insensitive.
//g Global: busca todas las coincidencias, no se detiene a la primer aparición.
let expReg = new RegExp("lorem","ig");
let expReg = /lorem/ig;

//Metodos para expresiones regulares:
let resultado_booleano = expReg.test(parrafo);
let array_resultado = expReg.exec(parrafo);
//---------------------------------------------------------------------------------------------------------------------------//
