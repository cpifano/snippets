/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Determinar Prefijo*/
	if(PWD == "/index.php"){
		var Prefijo = "";
	}else{
		var Prefijo = "../";
	}
	
	/*IMPORTACION DE LIBRERIAS COMUNES:-----------------------------------------------------------------------*/
	/*Referenciar hojas de estilos CSS:*/
	$('title').append('<link type="text/css" href="' + Prefijo + 'css/estilo.css" rel="stylesheet" />');
	
	/*Referenciar Documentos JS:*/
	$('title').append('<script type="text/javascript" src="' + Prefijo + 'js/control-y-efectos.js"></script>');
	
	/*Referenciar Documentos JS (JQUERY - VALIDATE):*/
	$('title').append('<script type="text/javascript" src="' + Prefijo + 'js/jquery.validate.min.js"></script>');
	
	/*Referenciar Documentos JS (SCROLL UP):*/
	$('title').append('<script type="text/javascript" src="' + Prefijo + 'js/jquery-scroll.js"></script>');
	
	/*Icono de la Web:*/
	$('title').append('<link rel="shortcut icon" href="' + Prefijo + 'images/logo-min.gif" />');
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*IMPORTACION DE LIBRERIAS PARTICULARES:------------------------------------------------------------------*/
	if(PWD == "/php/resultado.php"){
		$('title').append('<script type="text/javascript" src="' + Prefijo + 'js/manipulacion-dom.js"></script>');
	}
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/