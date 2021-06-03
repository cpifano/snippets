/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Background-Slideshow*/
	$.vegas('slideshow', {
		delay:2000,
		backgrounds:[
			{ src:'images/01.jpg', fade:1000 },
			{ src:'images/02.jpg', fade:1000 },
			{ src:'images/03.jpg', fade:1000 }
		]
	})('overlay', {
		src:'images/vegas/overlays/02.png'
	});
	
	/*Crear controles de Background-Slideshow*/
	$("#IDdivAnterior").click(function(){ $.vegas('previous'); });
	$("#IDdivSiguiente").click(function(){ $.vegas('next'); });
	$("#IDdivIniciar").click(function(){ $.vegas('slideshow'); });
	$("#IDdivPausar").click(function(){ $.vegas('pause'); });
	$("#IDdivParar").click(function(){ $.vegas('stop'); });
	$("#IDdivSaltar").click(function(){ $.vegas('jump', 2); });
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/