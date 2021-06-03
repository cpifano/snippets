/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*CAMBIAR PROPIEDADES CSS:--------------------------------------------------------------------------------*/
	/*Forma individual*/
	$('#IDdivContenido').css('background-color','#DDDDEE');


	/*Forma multiple*/
	$('#IDdivContenedor').css({
		'background-color' : '#EEEEEE',
		'border-style' : 'solid'
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*MANIPULAR CLASES:---------------------------------------------------------------------------------------*/
	/*Agregar una clase*/
	$('#IDdivSinClase').addClass('Distinto');
	
	/*Remover una clase*/
	$('#IDdivConClase').removeClass('Distinto');
	
	/*Cambiar una clase (El elemento ya posee una clase)*/
	$('#IDdivCambiar').toggleClass('Especial');
	/*--------------------------------------------------------------------------------------------------------*/
});
/*------------------------------------------------------------------------------------------------------------*/