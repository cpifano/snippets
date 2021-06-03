/*DOCUMENT READY:-------------------------------------------------------------------------*/
$(document).ready(function() {

	/*SELECCION DE ELEMENTOS:-------------------------------------------------------------*/
	/*Por ID*/
	var $Parrafo = $('#IDParrafo01');

	/*Por Clase*/
	var $Divisor = $('div.ClaseDiv01');

	/*Por tipo o eriqueta*/
	var $Parrafos = $('p');

	/*Las variables que contienen  un objeto JQuery
	comienzan con el signo $ por convencion pero
	no es obligatorio para su funcionamiento*/
	/*------------------------------------------------------------------------------------*/


	/*PSEUDO SELECION:--------------------------------------------------------------------*/
	var $PrimerParrafoPar = $('p.Par:first');

	/*Seleccion de elementos de un formulario*/
	var $ObjetosDeEntrada = $('#IDfrmPrincipal :input'); /* Contiene todos los inputs*/
	
	var $ObjetosTXT = $('#IDfrmPrincipal :text'); /* Contiene todos los textbox*/
	/*------------------------------------------------------------------------------------*/


	/*FILTRADO DE SELECCIONES:------------------------------------------------------------*/
	/*Captura de elementos dentro de otros*/
	var $ParrafosDentroDeDiv = $('#IDDiv02').has('p');

	/*Parrafos que no sean de clase "Impar"*/
	var $ParrafosPares01 = $('p').not('.Impar');

	/*Parrafos que sean de clase "Impar"*/
	var $ParrafosImpares = $('p').filter('.Impar');

	/*Parrafos que sean de clase "Par"*/
	var $ParrafosPares02 = $('p').find('.Par');

	/*Primer Elemento "parrafo"*/
	var $PrimerParrafo =  $('p').first();
	/*------------------------------------------------------------------------------------*/


	/*COMPROBAR SELECCIONES:--------------------------------------------------------------*/
	if ($('#IDParrafo01').length){
		alert('La seleccion es correcta');
	} else {
		alert('La seleccion es incorrecta');
	}
	/*------------------------------------------------------------------------------------*/

});
/*----------------------------------------------------------------------------------------*/