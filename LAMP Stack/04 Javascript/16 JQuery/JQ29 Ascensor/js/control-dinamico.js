/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Ascensor*/
	$('#IDdivAscensor').ascensor({
		AscensorName:'Ascensor',								// Nombre del ascensor que definir� id y class (por defecto: 'maison')
        ChildType:'section',
        AscensorFloorName:'Piso uno | Piso dos | Piso tres',
        Time:1000,												// Tiempo en ms de transicion de animacion
        Easing:'easeInOutCubic',
        WindowsOn:1,											// Determina el contenido inicial
        Direction:'chocolate',									// Direcci�n en la que va el "ascensor" (x, y , chocolate = AscensorMap)
        AscensorMap:'1|1 & 1|2 & 2|2',							// Define las posiciones X y Y de cada piso dentro del mapa
        KeyNavigation: true,
		PrevNext:true,											// Activamos o desactivamos los botones prev/next
        Queued:false,
        QueuedDirection:"x"
	});
	
	/*
		AscensorFloorName:'Uno | Dos | Tres',	// Nombres de los pisos o contenidos "url"
		WindowsFocus:true,						// Determina si se inicia en el primer contenido (por defecto: true)
		NavigationDirection:'xy',				// Determina par de ejes de navegacion
		KeyArrow:false,							// Activamos o desactivamos las flechas	
		keySwitch:false,						// Activamos o desactivamos la navegaci�n por flechas
		Link:true,
		CSSstyles:true,
		ReturnURL:true,
		ReturnCode:true,
		Navig:true								// Nos permite a�adir un sistema de navegaci�n
	*/
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/