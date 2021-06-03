/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear paralax slider*/
	$('#da-slider').cslider({
		current: 0,			//Determina la diapositiva de inicio
		bgincrement: 50,	//Incremento la posición del fondo cuando se desliza
		autoplay: true,		//Activa o desactiva el autoarranque
		interval: 4000		//Duracion de cada diapositiva
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/