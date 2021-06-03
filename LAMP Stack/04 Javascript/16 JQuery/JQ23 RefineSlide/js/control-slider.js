/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Slider*/
	$('#IDulSlider').refineSlide({
		transition : 'cubeV',			// Determina cual será la transicion.
		fallback3d : 'sliceV',			// Determina cual será la transicion en navegadores que soporten las propiedades 'transitions' pero no soporten '3d transforms'.
		controls : 'arrows',			// Determina cuales serán los controles, si es que los tiene.
		thumbMargin : 3,				// Porcentaje del ancho del margen del thumb.
		autoPlay : false,				// Determinará si las transiciones seran iniciadas automaticamente.
		delay : 5000,					// Tiempo entre diapositivas en milisegundos.
		transitionDuration : 800,		// Duracion de la transicion en milisegundos.
		startSlide : 0,					// Determina cual será la primer diapositiva.
		keyNav : true,					// Determina si se permitirá el uso de las flechas del teclado para pasar las diapositivas.
		captionWidth : 50,				// Porcentaje del ancho de las leyendas de las imagenes.
		arrowTemplate : '<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>', // Este es el formato base utilizado para los controles de flecha.
		onInit : function () {},		// Esta funcion se ejecutará con el inicio del slider.
		onChange : function () {},		// Esta funcion se ejecutará con el inicio de transición.
		afterChange : function () {}	// Esta funcion se ejecutará después del fin de la transición.
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