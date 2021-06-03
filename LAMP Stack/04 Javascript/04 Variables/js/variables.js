/*ENTEROS:----------------------------------------------------------------------------------------------*/

/* Definicion de variables (Opcional) */
var Num01, Num02, Resultado;

Num01 = 10;

Num02 = 20;

Resultado = Num01 + Num02;

/*------------------------------------------------------------------------------------------------------*/


/*DECIMALES:--------------------------------------------------------------------------------------------*/
/* Definicion de variables (Opcional) */
var Dec01, Dec02, ResultadoDec;

Dec01 = 1.5;

Dec02 = 0.5;

ResultadoDec = Dec01 + Dec02;

/*------------------------------------------------------------------------------------------------------*/


/*CADENAS:----------------------------------------------------------------------------------------------*/
var Cadena01 = "Hola Mundo!";
var Cadena02 = "Que tal?";
var Concatenacion01 = Cadena01 + " " + Cadena02;

var Concatenacion02 = Concatenacion01.concat(" Bien.");
/*------------------------------------------------------------------------------------------------------*/


/*VECTORES:---------------------------------------------------------------------------------------------*/
var Dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var Hoy = Dias[0]; /*Lunes*/

/*Puedo definir el tama�o en su declaracion*/
var Mes = new Array(11);
/*------------------------------------------------------------------------------------------------------*/


/*BOOLEANOS:--------------------------------------------------------------------------------------------*/
var Opcion01 = true;
var Opcion02 = false;
/*------------------------------------------------------------------------------------------------------*/


/*MUESTREO:---------------------------------------------------------------------------------------------*/
/*Enteros*/
document.write("Enteros:<br/>" + Num01 + " + " + Num02 + " = " + Resultado);
document.write("<br/><br/>");

/*Decimales*/
document.write("Decimales:<br/>" + Dec01 + " + " + Dec02 + " = " + ResultadoDec);
document.write("<br/><br/>");

/*Vectores*/
document.write("Vectores:<br/>" + Hoy);
document.write("<br/><br/>");

/*Cadenas*/
document.write("Cadena 01:<br/>" + Cadena01);
document.write("<br/><br/>");

document.write("Cadena 02:<br/>" + Cadena02);
document.write("<br/><br/>");

document.write("Concatenacion 01:<br/>" + Concatenacion01);
document.write("<br/><br/>");

document.write("Concatenacion 02:<br/>" + Concatenacion02);
document.write("<br/><br/>");

/*Booleanos*/
document.write("Booleanos:<br/>Opcion01: " + Opcion01 + "<br/>Opcion02: " + Opcion02);
document.write("<br/><br/>");
/*------------------------------------------------------------------------------------------------------*/
