/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Zoom*/
	$('.zoom').zoomy('click',{
		clickable: false,		// Habilita o deshabilita la apertura de la imagen
		zoomSize: 200,			// Tamaño de la lupa en px
		round: true,			// Determina la forma de la lupa (Redonda o Cuadrada)
		glare: true				// Determina si la lupa tiene efecto de reflejo o no.
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/