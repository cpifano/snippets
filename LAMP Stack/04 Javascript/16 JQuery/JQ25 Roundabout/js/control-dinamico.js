/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Roundabaut*/
	$('#IDulRoundabaut').roundabout({
		btnPrev: ".prev",				// Establece un boton de retroceso.
		btnNext: ".next",				// Establece un boton de avance.
		tilt: -10.0,					// Determina la inclinacion de los elementos.
		minOpacity: 0.4,				// Opacidad minima de los elementos.
		maxOpacity: 1.0,				// Opacidad maxima de los elementos.
		duration: 1000,					// Determina la duracion de la transicion en ms.
		reflect: false,					// Invierte el sentido de la rotonda.
		autoplay: true,					// Determina el autoarranque.
		autoplayDuration: 1000,			// Determina la duracion del autoarranque en ms.
		autoplayPauseOnHover: true,		// Determina si se detendra la animacion con el evento hover.
		btnStartAutoplay: ".start",		// Establece un boton de Play.
		btnStopAutoplay: ".stop",		// Establece un boton de Stop.
		btnToggleAutoplay: ".toggle"	// Establece un boton de Toggle.
	});
	  
	/*
	Metodos:
	$('ul').roundabout('startAutoplay');
	$('ul').roundabout('stopAutoplay');
	$('ul').roundabout('toggleAutoplay'); 
	$('ul').roundabout('isAutoplaying'); 
	*/
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/