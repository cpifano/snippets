//---------------------------------------------------------------------------------------------------------------------------//
// OBJETO CONSOLE:
//---------------------------------------------------------------------------------------------------------------------------//
console.log("Registro de algo que ha sucedido en la app");
console.error("Mensaje de error para la consola");
console.warn("Mensaje de alerta para la consola");
console.info("Mensaje informativo para la consola");

//Console log nos permite ingresar parametros REST:
console.log(parametro1, parametro2, parametro3, ...);

//Limpiar la consola:
console.clear();

//Agrupar mensajes:
console.group("Titulo de grupo");
console.log("Mensaje dentro del grupo")
console.groupEnd();

//Desplegar propiedades de un objeto:
console.dir(window);

//Crear tablas en la consola:
console.table(Object.entries(console));
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OBJETO DATE:
//---------------------------------------------------------------------------------------------------------------------------//
let fecha_hora_actual = new Date();

//Día en formato númerico:
fecha_hora_actual.getDate();

//Día de de la semana en formato numérico:
fecha_hora_actual.getDay();

//Mes en formato numérico:
fecha_hora_actual.getMonth();

//Año:
fecha_hora_actual.getFullYear();

//Hora:
fecha_hora_actual.getHours();

//Minutos:
fecha_hora_actual.getMinutes();

//Segundos:
fecha_hora_actual.getSeconds();

//Milisegundos:
fecha_hora_actual.getMiliseconds();

//Timestamp egundos que han pasado 01/01/1970:
Date.now();

//(MOMENT.JS)
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OBJETO MATH:
//---------------------------------------------------------------------------------------------------------------------------//
// Posee varias propiedades y métodos de operaciones matemáticas resueltos.
//---------------------------------------------------------------------------------------------------------------------------//
const pi = Math.PI;

//Valor absoluto:
Math.abs(-7.6);

//Redondeo:
Math.ceil(7.2);   // 8: Redondeo hacia arriba.
Math.floor(7.8);  // 7: Redondeo hacia abajo.
Math.round(7.2)   // 7: Redondeo al más cercano (inmediato).

//Raíz cuadrada:
Math.sqrt(41);

//Potencias (Base, Exponente):
Math.pow(10, 2); // 10 a la 2.

//Signo:
Math.sign(-83); //Retorna: -1
Math.sign(0);   //Retorna: 0
Math.sign(52);  //Retorna: 1

//Random:
Math.random(); //Retonra aleatorio de 0 a 1 (Decimal)

//Números aleatorio de 0 a 100:
Math.round(Math.random() * 100);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OBJETO JSON:
//---------------------------------------------------------------------------------------------------------------------------//
// JSON Java Script Objetct Notation es un standard establecido para el intercambio de datos de forma ligera.
//---------------------------------------------------------------------------------------------------------------------------//
const json = {
  nombre: "Camilo",
  telefonos: {"1234567", "7654321"},
  activo: true
}

//Método parse:
//Analiza una cadena de texto y la transforma a un valor válido de JS.
const retorno_object = JSON.parse("{}"); //Object
const retorno_array = JSON.parse("[1,2,3]"); //Array
const retorno_booleano = JSON.parse("true"); //Boolean

//Método stringify:
//Transforma un objeto valido de JS a un string.
const retorno_string = JSON.stringify(json); //retornará un string con el contenido del objeto "{...}"
const retorno_string = JSON.stringify([1,2,3]); //retorno_string = "[1,2,3]"
const retorno_string = JSON.stringify(true); //retorno_string = "true"
//---------------------------------------------------------------------------------------------------------------------------//
