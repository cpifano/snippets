/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear menu desplegable*/
	$('ul.sf-menu').superfish({
		delay: 0,					// Delay en milisegundos.
		minWidth: 12,				// Ancho mínimo de los sub-menús en "em".
		maxWidth: 27,				// Ancho máximo de los sub-menús en "em". 
		extraWidth: 1,				// Ancho extra.
		opacity: false				// Opacidad de los elementos.
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/