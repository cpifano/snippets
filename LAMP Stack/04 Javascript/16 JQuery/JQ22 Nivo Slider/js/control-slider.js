/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Slider*/
	$('#IDdivSlider').nivoSlider({
		effect: 'random', 			// Especifica el efecto de transicion.
        slices: 15, 				// Cantidad de trozos (slice animations).
        boxCols: 8, 				// Cantidad de columnas (box animations).
        boxRows: 4, 				// Cantidad de filas (box animations).
        animSpeed: 500, 			// Velocidad de transicion.
        pauseTime: 3000,			// Tiempo de duracion de cada imagen.
        startSlide: 0,				// Iniciar desde imagen (index).
        directionNav: true,			// Navegador (Anterior y Siguiente).
        controlNav: true,			// 1,2,3... Navegador.
        controlNavThumbs: false,	// Usar vistas en miniatura para el navegador.
        pauseOnHover: false,		// Detener transision por evento hover.
        manualAdvance: false,		// Forzar transiciones manuales.
        prevText: 'Siguiente',		// Texto del Navegador (directionNav).
        nextText: 'Anterior',		// Texto del Navegador (directionNav).
        randomStart: false,			// Iniciar con imagen aleatoria.
        beforeChange: function(){},	// Se activa antes de una transicion (Triggers).
        afterChange: function(){},	// Se activa despues de una transicion (Triggers).
        slideshowEnd: function(){},	// Se activa después de todas las diapositivas se hayan mostrado (Triggers).
        lastSlide: function(){},	// Se activa cuando la última diapositiva se muestra (Triggers).
        afterLoad: function(){}		// Se activa cuando el deslizador se haya cargado (Triggers).
	});
	
	/*
	Dominio del atributo effect:
		sliceDown
		sliceDownLeft
		sliceUp
		sliceUpLeft
		sliceUpDown
		sliceUpDownLeft
		fold
		fade
		random
		slideInRight
		slideInLeft
		boxRandom
		boxRain
		boxRainReverse
		boxRainGrow
		boxRainGrowReverse
		
	Determinar una transicion especifica a un solo elemento:
		<img src="images/slide1.jpg" alt="" data-transition="slideInLeft" />
	*/
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/