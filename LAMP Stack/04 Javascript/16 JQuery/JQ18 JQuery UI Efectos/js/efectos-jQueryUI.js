/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*FUNCION EJECUTAR EFECTOS:-------------------------------------------------------------------------------*/
	function EjecutarEfectos(IDElemento, IDcmbEfecto) {
		/*Capturar el efecto del ComboBox*/
		var EfectoSeleccionado = $(IDcmbEfecto).val();
		
		/*Inicializar las opciones como vacias*/
		var Opciones = {};
		
		/*Cargar opciones para los efectos Scale*/
		if ( EfectoSeleccionado === "scale" && $(IDElemento).is(':visible')) {
			Opciones = { percent: 0 };
		} else if ( EfectoSeleccionado === "scale"){
			Opciones = { percent: 100 };
		}
		
		/*Cargar opciones para los efectos Size*/
		if ( EfectoSeleccionado === "size" ) {
			$(IDElemento).each(function() {
				if ($(this).width() == 10) {
					Opciones = { to: { width: 240, height: 160 } };
				} else {
					Opciones = { to: { width: 10, height: 10 } };
				}
			});
		}
			
		/*Ejecutar el efecto*/
		$(IDElemento).toggle( EfectoSeleccionado, Opciones, 500 );
	};
	/*--------------------------------------------------------------------------------------------------------*/
	
	/*Ejecutar funcion de efectos segun el evento*/
	$("#IDbtnEjecutar").click(function() {
		EjecutarEfectos('#IDdivAnimacion', '#IDcmbEfectos');
		return false;
	});
	
});
/*------------------------------------------------------------------------------------------------------------*/