/*WINDOW ONLOAD:---------------------------------------------------------------------------------------------------------------------*/
window.onload = function(){
	/*Generar intervalo cada un octavo de segundo*/
	setInterval(Control_Ingreso, 125);
	
	/*LARGO*/
	Agregar_Evento_DOM("IDtxtLargo", "onblur", "F", "Largo_Salir('3', '8', 'IDfrmPrincipal', 'IDtxtLargo', 'IDparLeyendaLargo', 'IDlblAvisoLargo');");
	
	/*SOLO NUMEROS*/
	Agregar_Evento_DOM("IDtxtNumeros", "onkeypress", "V", "Solo_Numeros(event, 'IDfrmPrincipal', 'IDlblAvisoNumeros');");
	Agregar_Evento_DOM("IDtxtNumeros", "onblur", "F", "Solo_Numeros_Salir('IDfrmPrincipal', 'IDtxtNumeros', 'IDparLeyendaNumeros', 'IDlblAvisoNumeros');");
	
	/*SOLO LETRAS SIMPLES (SIN ESPACIOS)*/
	Agregar_Evento_DOM("IDtxtLetrasSimple", "onkeypress", "V", "Solo_Letras_SSE(event, 'IDfrmPrincipal', 'IDlblAvisoLetrasSimple');");
	Agregar_Evento_DOM("IDtxtLetrasSimple", "onblur", "F", "Solo_Letras_SSE_Salir('IDfrmPrincipal', 'IDtxtLetrasSimple', 'IDparLeyendaLetrasSimple', 'IDlblAvisoLetrasSimple');");
	
	/*SOLO LETRAS COMPLEJO (CON ESPACIOS)*/
	Agregar_Evento_DOM("IDtxtLetrasComplejo", "onkeypress", "V", "Solo_Letras_CCE(event, 'IDfrmPrincipal', 'IDlblAvisoLetrasComplejo');");
	Agregar_Evento_DOM("IDtxtLetrasComplejo", "onblur", "F", "Solo_Letras_CCE_Salir('IDfrmPrincipal', 'IDtxtLetrasComplejo', 'IDparLeyendaLetrasComplejo', 'IDlblAvisoLetrasComplejo');");
	
	/*CHECK BOX*/
	Agregar_Evento_DOM("IDchkCheck01", "onclick", "F", "Selecion_Elementos('chkCheck', 'IDfrmPrincipal', 'IDparLeyendaCheck', 'IDlblAvisoCheck');");
	Agregar_Evento_DOM("IDchkCheck02", "onclick", "F", "Selecion_Elementos('chkCheck', 'IDfrmPrincipal', 'IDparLeyendaCheck', 'IDlblAvisoCheck');");
	Agregar_Evento_DOM("IDchkCheck03", "onclick", "F", "Selecion_Elementos('chkCheck', 'IDfrmPrincipal', 'IDparLeyendaCheck', 'IDlblAvisoCheck');");
	
	/*RADIO BUTTON*/
	Agregar_Evento_DOM("IDradRadio01", "onclick", "F", "Selecion_Elementos('radRadio', 'IDfrmPrincipal', 'IDparLeyendaRadio', 'IDlblAvisoRadio');");
	Agregar_Evento_DOM("IDradRadio02", "onclick", "F", "Selecion_Elementos('radRadio', 'IDfrmPrincipal', 'IDparLeyendaRadio', 'IDlblAvisoRadio');");
	Agregar_Evento_DOM("IDradRadio03", "onclick", "F", "Selecion_Elementos('radRadio', 'IDfrmPrincipal', 'IDparLeyendaRadio', 'IDlblAvisoRadio');");
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/


/*FUNCION CONTROL DE INGRESO:--------------------------------------------------------------------------------------------------------*/
function Control_Ingreso() {

	/*Contrlolar el Largo*/
	Largo('3', '8', 'IDfrmPrincipal', 'IDtxtLargo', 'IDlblAvisoLargo');

}
/*-----------------------------------------------------------------------------------------------------------------------------------*/