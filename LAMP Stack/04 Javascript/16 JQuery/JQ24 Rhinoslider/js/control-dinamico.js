/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear slider*/
	$('#slider').rhinoslider({
		animateActive: true,			// Define si la diapositiva actual debería haber sido animada o no
		easing: 'swing',
		effect: 'shuffle',				// Efecto: ('none', 'fade', 'slide', 'kick', 'transfer', 'shuffle', 'explode', 'turnOver', 'chewyBars')
		effectTime: 1000,				// Duración en ms de la animación de transision
		partDelay: 100,					// Delay de cada parte de la animación, sólo con efecto de barras
		parts: '5,3',					// Define la cantidad de partes en las que se corta cada diapositiva
		shiftValue: '150',				// Define la distancia de separación de las diapositivas para algunas animaciones
		showTime: 3000,					// Tiempo en ms de duracion de muestreo de cada diapositiva
		slideNextDirection: 'toRight',	// Direccion de la animacion asociada a la diapositiva siguiente ('toLeft', 'toRight', 'toTop', 'toBottom')
		slidePrevDirection: 'toLeft',	// Direccion de la animacion asociada a la diapositiva anterior ('toLeft', 'toRight', 'toTop', 'toBottom')
		changeBullets: 'after',			// Define si el numero activo del navegador debe cambiarse antes o después de la animación
		controlFadeTime: 650,			// Duración de la animación para el desvanecimiento de los controles
		controlsKeyboard: true,			// Habilita o deshabilita la navegacion con el teclado
		controlsMousewheel: true,		// Habilita o deshabilita la navegacion con el scroll
		controlsPlayPause: true,		// Habilita o deshabilita los botones de play y pause
		controlsPrevNext: true,			// Habilita o deshabilita los botones de siguiente y anterior
		nextText: 'Siguiente',			// Texto para el next-button
		pauseText: 'Pausar',			// Texto para el pause-button
		playText: 'Reproducir',			// Texto para el play-button
		prevText: 'Anterior',			// Texto para el prev-button
		showBullets: 'hover',			// Navegador: ('hover', 'always', 'never')
		showControls: 'hover',			// Controles: ('hover', 'always', 'never')
		autoPlay: true,					// Habilita o deshabilita el auto arranque
		cycled: true,					// Habilita o deshabilita la repeticion de diapositivas al culminarlas
		pauseOnHover: true,				// Habilita o deshabilita una pausa con el evento hover del slider
		randomOrder: false,				// Habilita o deshabilita el orden aleatorio de diapositivas
		captionsFadeTime: 650,			// Duracion de la animacion de las leyendas
		captionsOpacity: 0.7,			// Opacidad de las leyendas
		showCaptions: 'hover',			// Leyendas: ('hover', 'always', 'never')
		additionalResets: function () { return false; },
		callBackInit: function () { return false; },
		callBackNext: function () { return false; },
		callBackPause: function () { return false; },
		callBackPlay: function () { return false; },
		callBackPrev: function () { return false; },
		callBeforeInit: function () { return false; },
		callBeforeNext: function () { return false; },
		callBeforePrev: function () { return false; }
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/