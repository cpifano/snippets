/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*OBTENER CONTENIDOS DE ELEMENTOS:------------------------------------------------------------------------*/
	/*Contenido HTML de un elemento (Codigo con etiquetas)*/
	var $PrimerParrafoHTML = $('#IDPrimerParrafo').html();
	
	/*Contenido en texto de un elemento (Solo el texto interpretado)*/
	var $PrimerParrafoTXT = $('#IDPrimerParrafo').text();
	
	/*Atributo determinado de un elemento*/
	var $NombreBoton = $('#IDbtnBoton').attr('value');
	
	/*Valor de un elemento*/
	var $ValorTextBox = $('#IDtxtTextBox').val();
	
	/*Muestreo de contenidos capturados*/
	alert('.:: CAPTURA DE CONTENIDOS ::. \n\n PRIMER PARRAFO: \n Contenido HTML: \n' + $PrimerParrafoHTML + '\n Contenido TXT: \n' + $PrimerParrafoTXT + '\n\n\nATRIBUTO DEL BOTON: \n' + $NombreBoton + '\n\n\nVALOR DEL TEXTBOX: \n' + $ValorTextBox);
	/*--------------------------------------------------------------------------------------------------------*/

	
	/*ESTABLECER CONTENIDOS DE ELEMENTOS:---------------------------------------------------------------------*/
	/*Contenido en texto de un elemento*/
	$('#IDSegundoParrafo').text('El contenido de este "Segundo Parrafo" fué modificado con "text"...');
	
	/*Contenido HTML de un elemento*/
	$('#IDTercerParrafo').html('El contenido de este "Tercer Parrafo" fué modificado con "html"...</br>');
	
	/*Atributo determinado de un elemento*/
	$('#IDbtnBoton').attr('value', 'Nuevo Nombre Boton');
	
	/*Valor de un elemento*/
	$('#IDtxtTextBox').val('Nuevo Contenido');
	/*--------------------------------------------------------------------------------------------------------*/
	

	/*CREAR NUEVOS ELEMENTOS:---------------------------------------------------------------------------------*/
	/*Insertar al final de un elemento*/
	$('body').append('<p>Nuevo Parrafo</p>');
	
	/*Insertar al principio de un elemento*/
	$('body').prepend('<p>Nuevo Primer Parrafo</p>');
	
	/*Insertar antes de un elemento particular*/
	$('<p>Estoy antes de el parrafo particular...</p>').insertBefore('#IDParticular');
	$('#IDParticular').before('<p>Yo tambien estoy antes de el parrafo particular...</p>');
	
	/*Insertar despues de un elemento particular*/
	$('<p>Estoy despues de el parrafo particular...</p>').insertAfter('#IDParticular');
	$('#IDParticular').after('<p>Yo tambien estoy despues de el parrafo particular...</p>');
	/*--------------------------------------------------------------------------------------------------------*/

	
	/*CLONAR ELEMENTOS:---------------------------------------------------------------------------------------*/
	$('#IDParrafoCopiar').clone().appendTo('body');
	/* Para estos casos tambien disponemos de la funcion prependTo */
	/*--------------------------------------------------------------------------------------------------------*/
	
	
	/*ELIMINAR ELEMENTOS Y CONTENIDOS:------------------------------------------------------------------------*/
	/*Remove*/
	/*Remueve de forma permanente un elemento*/
	$('#IDEliminarRem').remove();
	
	/*Detach*/
	/*Remueve el elemento, pero mantiene la informacion y eventos asociados al mismo en caso de reinsertarlo*/
	$('#IDEliminarDet').detach();
	
	/*Empty*/
	/*Remueve solo el contenido HTML del elemento*/
	$('#IDEliminarEmp').empty();
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/