/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*AGREGAR EVENTOS A ELEMENTOS (METODO ABREVIADO):---------------------------------------------------------*/
	$("#IDBoton01").mouseover(function(){alert('Hola Mundo');});
	
	$("#IDDiv").click(function(){Saludo('Juan');});
	
	$("#IDTexto").focus(function(){Contenido('#IDTexto', 'Inserte texto aqui...');});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*AGREGAR EVENTOS A ELEMENTOS (METODO BIND):--------------------------------------------------------------*/
	$("#IDBotonRecargar").bind('click', function(){location.reload();}); /*location.reload() Recarga la pagina*/
	
	var Evento = $('#IDTextoEvento').val();
	$("#IDBotonEvento").bind(Evento, function(){Saludo('Juan');});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*AGREGAR MULTIPLES EVENTOS A ELEMENTOS (METODO BIND):----------------------------------------------------*/
	$("#IDBotonMultiple").bind({
		'click' : function(){ alert('Evento click');},
		'keydown' : function(){ alert('Evento keydown');}
	});
	
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*AGREGAR EVENTOS A ELEMENTOS (ONE):----------------------------------------------------------------------*/
	$("#IDBotonUnaVez").one('click', function(){Saludo('Juan');});		/*Se ejecutara solo una vez*/
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*QUITAR EVENTOS A ELEMENTOS (UNBIND):--------------------------------------------------------------------*/
	$("#IDBotonQuitar").bind('click', function(){
		$("#IDBoton01").unbind('mouseover');
		$("#IDDiv").unbind('click');
		$("#IDTexto").unbind('focus');
		$("#IDBotonRecargar").unbind('click');
		$("#IDBotonEvento").unbind('click');
		$("#IDBotonMultiple").unbind('click');
		$("#IDBotonMultiple").unbind('keydown');
		$("#IDBotonUnaVez").unbind('click');
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*AGREGAR EVENTOS CON NOMBRES A ELEMENTOS:----------------------------------------------------------------*/
	$("#IDBotonDistinto").bind('click.Distinto', function(){Saludo('Juan');});
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/

/*FUNCION SALUDO:---------------------------------------------------------------------------------------------*/
function Saludo(Nombre){
	alert('Hola ' + Nombre + ", como estás?");
}
/*------------------------------------------------------------------------------------------------------------*/


/*FUCNION CONTENIDO:------------------------------------------------------------------------------------------*/
function Contenido (IDElemento, Cadena){
	$(IDElemento).val(Cadena);
}
/*------------------------------------------------------------------------------------------------------------*/