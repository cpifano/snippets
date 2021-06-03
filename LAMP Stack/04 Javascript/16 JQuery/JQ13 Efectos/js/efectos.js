/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*SHOW AND HIDE:------------------------------------------------------------------------------------------*/
	$("#IDbtnShowHide").toggle(
		function(){
			$("#IDdivShowHide").hide();
		},
		
		function(){
			$("#IDdivShowHide").show();
		}
	);
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*FADEIN AND FADEOUT:-------------------------------------------------------------------------------------*/
	$("#IDbtnFade").toggle(
		function(){
			$("#IDdivFade").fadeOut();
		},
		
		function(){
			$("#IDdivFade").fadeIn();
		}
	);
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*SLIDEUP AND SLIDEDOWN:----------------------------------------------------------------------------------*/
	$("#IDbtnSlide").toggle(
		function(){
			$("#IDdivSlide").slideUp();
		},
		
		function(){
			$("#IDdivSlide").slideDown();
		}
	);
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*EFECTOS CON TOGGLE:--------------------------------------------------------------------------------------*/
	/*Fade*/
	$("#IDbtnFadeToggle").click(function(){
		$("#IDdivFadeToggle").fadeToggle();
	});
	
	/*Slide:*/
	$("#IDbtnSlideToggle").click(function(){
		$("#IDdivSlideToggle").slideToggle();
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*NOTA:---------------------------------------------------------------------------------------------------*/
	/*
	Todas las funciones vistas anteriormente pueden recibir distintos tipos de parametro para personalizar la
	animacion, entre estos parametros se destacan la velocidad de la transicion en milisegundos o determinarla
	con un nemotecnico.
	
	Ejemplos:
		$("#IDdivFade").fadeOut(300);
		300 milisegundos
		
		$("#IDdivFade").fadeOut(fast);
		$("#IDdivFade").fadeOut(slow);
	*/
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*EJECUTAR UNA FUNCION AL TERMINAR UNA TRANSICION:--------------------------------------------------------*/
	$("#IDbtnFuncion").click(function(){
		$("#IDdivFuncion").fadeToggle(600, function(){alert('La transicion ha terminado');});
	});
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/