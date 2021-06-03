/*DECLARACION DE TIPOS PRIMITIVOS:-----------------------------------------------------------------------*/
var Cadena = "Hola Mundo";
var Numero = 28;
var Booleano = true;
var SinTipo;
var Nulo = null;
/*-------------------------------------------------------------------------------------------------------*/


/*DECLARACION DE TIPOS NO PRIMITIVOS:--------------------------------------------------------------------*/
var Vector = [1, 2, 3, 4, 5, 6];

function Funcion (){
	alert ('Hola Mundo');
};

var Objeto = {
	/*Atributos*/
	Marca: 'Chevrolet',
	Modelo: 'Corsa',
	Color: "Rojo",
	Ruedas: '4'
};
/*-------------------------------------------------------------------------------------------------------*/


/*COMPROBACION DE TIPOS PRIMITIVOS:----------------------------------------------------------------------*/
document.write('COMPROBACION DE TIPOS DE DATOS PRIMITIVOS:');

/*Cadenas*/
if (typeof Cadena == 'string'){
	document.write('</br>Cadena es de tipo string');
} else {
	document.write('</br>Cadena NO es de tipo string');
};

/*Numeros*/
if (typeof Numero == 'number'){
	document.write('</br>Numero es de tipo number');
} else {
	document.write('</br>Numero NO es de tipo number');
};

/*Booleanos*/
if (typeof Booleano == 'boolean'){
	document.write('</br>Booleano es de tipo boolean');
} else {
	document.write('</br>Booleano NO es de tipo boolean');
};

/*Indefinidos*/
if (typeof SinTipo == 'undefined'){
	document.write('</br>SinTipo es de tipo undefined');
} else {
	document.write('</br>SinTipo NO es de tipo undefined');
};

/*Nulos*/
/*Esta comprobacion requiere el operador de igualdad estricta*/
if (Nulo === null){
	document.write('</br>Nulo es de tipo null');
} else {
	document.write('</br>Nulo NO es de tipo null');
};
/*-------------------------------------------------------------------------------------------------------*/


/*COMPROBACION DE TIPOS NO PRIMITIVOS:-------------------------------------------------------------------*/
document.write('</br></br>COMPROBACION DE TIPOS DE DATOS NO PRIMITIVOS:');

/*Vectores*/
if (jQuery.isArray(Vector)){
	document.write('</br>Vector es de tipo array');
} else {
	document.write('</br>Vector NO es de tipo array');
};

/*Funciones*/
if (jQuery.isFunction(Funcion)){
	document.write('</br>Funcion es de tipo function');
} else {
	document.write('</br>Funcion NO es de tipo function');
};

/*Objetos*/
if (jQuery.isPlainObject(Objeto)){
	document.write('</br>Objeto es de tipo object');
} else {
	document.write('</br>Objeto NO es de tipo object');
};
/*-------------------------------------------------------------------------------------------------------*/