/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Slider*/
	$('#IDulSlider').refineSlide({
		transition : 'cubeV',			// Determina cual ser� la transicion.
		fallback3d : 'sliceV',			// Determina cual ser� la transicion en navegadores que soporten las propiedades 'transitions' pero no soporten '3d transforms'.
		controls : 'arrows',			// Determina cuales ser�n los controles, si es que los tiene.
		thumbMargin : 3,				// Porcentaje del ancho del margen del thumb.
		autoPlay : false,				// Determinar� si las transiciones seran iniciadas automaticamente.
		delay : 5000,					// Tiempo entre diapositivas en milisegundos.
		transitionDuration : 800,		// Duracion de la transicion en milisegundos.
		startSlide : 0,					// Determina cual ser� la primer diapositiva.
		keyNav : true,					// Determina si se permitir� el uso de las flechas del teclado para pasar las diapositivas.
		captionWidth : 50,				// Porcentaje del ancho de las leyendas de las imagenes.
		arrowTemplate : '<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>', // Este es el formato base utilizado para los controles de flecha.
		onInit : function () {},		// Esta funcion se ejecutar� con el inicio del slider.
		onChange : function () {},		// Esta funcion se ejecutar� con el inicio de transici�n.
		afterChange : function () {}	// Esta funcion se ejecutar� despu�s del fin de la transici�n.
	});
	

	/*
	Dominio del atributo transition:
	random
	cubeH
	cubeV
	fade
	sliceH
	sliceV
	slideH
	slideV
	scale
	blockScale
	kaleidoscope
	fan
	blindH
	blindV
	
	Dominio del atributo controls:
	thumbs
	arrows
	null
	*/
	
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/