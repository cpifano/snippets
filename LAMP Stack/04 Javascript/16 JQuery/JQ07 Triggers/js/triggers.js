/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*AGREGAR EVENTO AL ELEMENTO (METODO ABREVIADO):----------------------------------------------------------*/
	$("#IDBoton").click(function(){alert('Evento click del boton');});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*DISPARAR EVENTO DE UN ELEMENTO (TRIGGER):---------------------------------------------------------------*/
	$("#IDBoton").trigger('click');
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/