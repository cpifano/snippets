/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*EFECTOS:------------------------------------------------------------------------------------------------*/
	/*Slide:*/
	$("#IDbtnReglas").click(function(){
		$("#IDdivReglas").slideToggle(800);
	});
	
	$("#IDbtnDetalles").click(function(){
		$("#IDdivReglas").slideToggle(800);
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*CONTROL DE INGRESO:-------------------------------------------------------------------------------------*/
	/*Desabilitar el click derecho*/
	$('body').attr({
		'oncontextmenu' : 'return false',
	});
	
	/*Control de ingreso (Solo Numeros)*/
	$("#IDtxtCantidad").keypress(function(event){return Solo_Numeros(event);});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*FUNCION SOLO NUMEROS:-----------------------------------------------------------------------------------*/
	function Solo_Numeros(Evento){
		/*Capturar codigo Ascii del evento KeyPress*/
		var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
		
		/*Evaluar*/
		if (CodigoCaracter > 31 && (CodigoCaracter < 48 || CodigoCaracter > 57)){
			return false;
		} else{
			return true;
		}
	}
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*VALIDACION DE DATOS:------------------------------------------------------------------------------------*/
	/*Iniciar validacion simple en un formulario*/
	$("#IDfrmPrincipal").validate();
	
	/*Traduccion de mensajes a ES*/
	jQuery.extend(jQuery.validator.messages, {
		required: "<br/>Este campo es obligatorio.",
		remote: "<br/>Por favor, rellena este campo.",
		email: "<br/>Por favor, escriba una dirección de correo válida",
		url: "<br/>Por favor, escriba una URL válida.",
		date: "<br/>Por favor, escriba una fecha válida.",
		dateISO: "<br/>Por favor, escriba una fecha respetando el formato ISO.",
		number: "<br/>Por favor, escriba un n�mero entero válido.",
		digits: "<br/>Por favor, escriba sólo dígitos.",
		creditcard: "<br/>Por favor, escriba un número de tarjeta válido.",
		equalTo: "<br/>Por favor, escriba el mismo valor de nuevo.",
		accept: "<br/>Por favor, escriba un valor con una extensión aceptada.",
		maxlength: jQuery.validator.format("<br/>Por favor, no escriba más de {0} caracteres."),
		minlength: jQuery.validator.format("<br/>Por favor, no escriba menos de {0} caracteres."),
		rangelength: jQuery.validator.format("<br/>Por favor, escriba un valor entre {0} y {1} caracteres."),
		range: jQuery.validator.format("<br/>Por favor, escriba un valor entre {0} y {1}."),
		max: jQuery.validator.format("<br/>Por favor, escriba un valor menor o igual a {0}."),
		min: jQuery.validator.format("<br/>Por favor, escriba un valor mayor o igual a {0}.")
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*CORRECCION DE CODIFICACION DE CARACTERES:---------------------------------------------------------------*/
	$.ajaxSetup({
		'beforeSend' : function(xhr) {
		xhr.overrideMimeType('text/html; charset=iso-8859-1');
		}
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/