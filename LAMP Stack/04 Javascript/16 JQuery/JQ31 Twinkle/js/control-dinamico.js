/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Efecto Twinkle*/
	var Opciones = {
		"effect": "drop",					// Efecto: (splash, drop)
		"delay": 0,							// Delay de la transicion
		"gap": 0,
		"effectOptions": {
			"color": "rgba(0,0,255,0.5)",	// Color del efecto
			"radius": 300,					// Radio de la circunferencia
			"duration": 1000,				// Duracion de la animacion
			"width": 2,						// Grosor del borde
			"count": 3,
			"delay": 300					// Delay de la animacion
		}
	};
	
	$("#IDdivTwinkle").click(function(){
		$('#IDdivTwinkle').twinkle(Opciones);
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/