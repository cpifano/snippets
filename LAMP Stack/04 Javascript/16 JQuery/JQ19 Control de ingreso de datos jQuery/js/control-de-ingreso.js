/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Desabilitar el click derecho*/
	$('body').attr({
		'oncontextmenu' : 'return false',
	});
	
	/*Desabilitar seleccion de texto
	document.onselectstart = function(){
		return false;
	} 

	document.onmousedown = function(){
		return false;
	}
	*/
	
	/*Generar intervalo cada un octavo de segundo*/
	setInterval(Control_Ingreso, 125);
	
	/*LARGO*/
	$("#IDtxtLargo").blur(function(){Largo_Salir('3', '8', 'IDtxtLargo', 'IDparLeyendaLargo', 'IDlblAvisoLargo');});
	
	/*SOLO NUMEROS*/
	$("#IDtxtNumeros").bind({
		'keypress' : function(event){return Solo_Numeros(event, 'IDlblAvisoNumeros');},
		'blur' : function(){Solo_Numeros_Salir('IDtxtNumeros', 'IDparLeyendaNumeros', 'IDlblAvisoNumeros');}
	});
	
	/*SOLO LETRAS SIMPLES (SIN ESPACIOS)*/
	$("#IDtxtLetrasSimple").bind({
		'keypress' : function(event){return Solo_Letras_SSE(event, 'IDlblAvisoLetrasSimple');},
		'blur' : function(){Solo_Letras_SSE_Salir('IDtxtLetrasSimple', 'IDparLeyendaLetrasSimple', 'IDlblAvisoLetrasSimple');}
	});
	
	/*SOLO LETRAS COMPLEJO (CON ESPACIOS)*/
	$("#IDtxtLetrasComplejo").bind({
		'keypress' : function(event){return Solo_Letras_CCE(event, 'IDlblAvisoLetrasComplejo');},
		'blur' : function(){Solo_Letras_CCE_Salir('IDtxtLetrasComplejo', 'IDparLeyendaLetrasComplejo', 'IDlblAvisoLetrasComplejo');}
	});
	
	/*CHECK BOX*/
	$("#IDchkCheck01").click(function(){Selecion_Elementos('chkCheck', 'IDparLeyendaCheck', 'IDlblAvisoCheck');});
	$("#IDchkCheck02").click(function(){Selecion_Elementos('chkCheck', 'IDparLeyendaCheck', 'IDlblAvisoCheck');});
	$("#IDchkCheck03").click(function(){Selecion_Elementos('chkCheck', 'IDparLeyendaCheck', 'IDlblAvisoCheck');});
	
	/*RADIO BUTTON*/
	$("#IDradRadio01").click(function(){Selecion_Elementos('radRadio', 'IDparLeyendaRadio', 'IDlblAvisoRadio');});
	$("#IDradRadio02").click(function(){Selecion_Elementos('radRadio', 'IDparLeyendaRadio', 'IDlblAvisoRadio');});
	$("#IDradRadio03").click(function(){Selecion_Elementos('radRadio', 'IDparLeyendaRadio', 'IDlblAvisoRadio');});
});
/*------------------------------------------------------------------------------------------------------------*/

/*FUNCION CONTROL DE INGRESO:--------------------------------------------------------------------------------------------------------*/
function Control_Ingreso() {

	/*Contrlolar el Largo*/
	Largo('3', '8', 'IDtxtLargo', 'IDlblAvisoLargo');

}
/*-----------------------------------------------------------------------------------------------------------------------------------*/