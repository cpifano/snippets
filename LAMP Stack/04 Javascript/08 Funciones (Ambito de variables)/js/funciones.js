/*DEFINICION DE VARIABLES:------------------------------------------------------------------------------*/
var Num01 = 10;
var Num02 = 20;
/*------------------------------------------------------------------------------------------------------*/

/*DEFINICION DE FUNCIONES:------------------------------------------------------------------------------*/
/*Nota:
Si en el interior de una función, las variables se declaran mediante "var" se consideran locales a la
funcion y las variables que no se han declarado mediante var, se transforman automáticamente en
variables globales.
*/

/*Funcion Saludo (Sin parametros ni retorno):*/
function Saludo (){
	MiSaludo = "Hola Mundo!";
}

/*Funcion Suma (Sin Retorno):*/
function Suma (NumA, NumB){
	var Resultado = NumA + NumB;
	document.write("<br/><br/>SUMA:<br/>" + NumA + " + " + NumB + " = " + Resultado);
}

/*Funcion Resta (Con Retorno):*/
function Resta (NumA, NumB){
	var Resultado = NumA - NumB;
	return Resultado;
}
/*------------------------------------------------------------------------------------------------------*/

/*INVOCACION DE FUNCIONES:------------------------------------------------------------------------------*/
/*Invocacion de funcion Saludo:*/
Saludo();
document.write("SALUDO: " + MiSaludo);

/*Invocacion de funcion Suma:*/
Suma (Num01, Num02);

/*Invocacion de funcion Resta*/
ResultadoResta = Resta (Num02, Num01);

document.write("<br/><br/>RESTA:<br/>" + Num02 + " - " + Num01 + " = " + ResultadoResta);
/*------------------------------------------------------------------------------------------------------*/