/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*TRIM:------------------------------------------------------------------------------------------*/
	/*Remueve espacios en blanco del principio y el final*/
	var Palabras_Sin_Espaciar = $.trim('                   Hola Mundo                   ');

	$('body').append('</br></br>TRIM');
	$('body').append('</br>Palabras sin Espacios: ' + Palabras_Sin_Espaciar);
	/*-----------------------------------------------------------------------------------------------*/


	/*IN ARRAY:--------------------------------------------------------------------------------------*/
	/*Devuelve el indice de un valor en un vector o -1 si el valor no existe en el vector*/
	var Vector = [1, 2, 3, 4, 5];

	$('body').append('</br></br>IN ARRAY');

	if ($.inArray(4, Vector) !== -1){
		$('body').append('</br>Valor encontrado');
	}

	if ($.inArray(6, Vector) == -1){
		$('body').append('</br>Valor no encontrado');
	}
	/*-----------------------------------------------------------------------------------------------*/


	/*EACH:------------------------------------------------------------------------------------------*/
	/*
	Sirve para iterar uno por uno los elementos de una colección, usualmente estos son el resultado
	de un selector jQuery, pero también pueden ser otras colecciones de Javascript como un array o un objeto.
	*/

	$('body').append('</br></br>EACH');

	/*Ejemplo con un vector:*/
	$('body').append('</br>Ejemplo con un vector:');

	$.each([1,2,3],function(Indice, Valor) {
	  $('body').append('</br>El indice es ' + Indice + ' y valor es: ' + Valor);
	});


	/*Ejemplo con un objeto:*/
	$('body').append('</br></br>Ejemplo con un objeto:');

	var objAuto = {
		/*Atributos*/
		Marca: 'Chevrolet',
		Modelo: 'Corsa',
		Color: "Rojo",
		Ruedas: '4'
	};

	$.each(objAuto,function(Atributo, Valor) {
	  $('body').append('</br>' + Atributo + ': ' + Valor);
	});


	/*Ejemplo con un objeto HTML <li>:*/
	$('body').append('</br></br>Ejemplo con un objeto HTML:');

	$('li').each(function(Indice) {
		$('body').append('</br>' + Indice + ': ' + $(this).text());
	});
	/*-----------------------------------------------------------------------------------------------*/

});
/*------------------------------------------------------------------------------------------------------------*/