/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {

	/*MODIFICAR ASPECTO DE ELEMENTOS (JQUERY UI):-------------------------------------------------------------*/
	/*Acordion*/
	$("#IDdivAcordion").accordion({ header: "h3" });
	
	/*Pestañas*/
	$('#IDdivTabs').tabs();
	
	/*Cuadro de dialogo*/
	$('#IDdivDialogo').dialog({
		autoOpen: false,
		width: 600,
		modal: true,
		buttons: {
			"Aceptar": function() {
				$(this).dialog("close");
			},
			"Cancelar": function() {
				$(this).dialog("close");
			}
		}
	});
				
	/*Enlace de dialogo*/
	$('#IDlnkDialogo').click(function(){
		$('#IDdivDialogo').dialog('open');
		return false;
	});
	
	/*Datepicker dentro de un Div*/
	$('#IDdivDatepicker').datepicker({
		inline: true
	});
	
	/*Datepicker dentro de un Input*/
	$("#IDtxtDatepicker").datepicker({
		dateFormat: 'dd/mm/yy'}
	);
	
	/*Slider con Rango*/
	$('#IDdivSliderRango').slider({
		range: true,
		values: [10, 50]
	});
	
	/*Slider Minimo Fijo*/
	$("#IDdivSliderNota").slider({
		range: "min",
		value: 7,
		min: 1,
		max: 12,
		slide: function(event, ui) {
			$("#IDtxtNota").val(ui.value);
		}
	});
	
	$("#IDtxtNota").val($("#IDdivSliderNota").slider("value"));
	
	/*Barra de progreso*/
	$( "#IDdivBarraProgreso" ).progressbar({
		value: 80
	});
	
	/*Autocompletar*/
	var ListadoPalabras = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	];
	
	$("#IDtxtAutocompletar").autocomplete({
		source: ListadoPalabras
	});
	
	/*Ordenables*/
	$("#IDOrdenable").sortable({
			placeholder: "ui-state-highlight"
	});
	
	$("#IDOrdenable").disableSelection();
	
	/*Drag and Drop*/
		/*Definir Afuera y Adentro*/
		var $Afuera = $( "#IDulAfuera" ),
			$Adentro = $( "#IDdivAdentro" );

		/*Permitir arrastrar desde "Afuera" (DRAG)*/
		$( "li", $Afuera ).draggable({
			cancel: "a.ui-icon", /* El click en un icono no iniciará arrastrado (DRAG) */
			revert: "invalid",  /* Si no se concreta al soltar el elemento vuelve a su posicion inicial (NO-DROP) */
			containment: $( "#demo-frame" ).length ? "#demo-frame" : "document", /* Se adhieren a demo-frame si está presente */
			helper: "clone",
			cursor: "move"
		});

		/*Permitir que se suelten elementos para "Adentro" desde "Afuera" (DROP)*/
		$Adentro.droppable({
			accept: "#IDulAfuera > li",
			activeClass: "ui-state-highlight",
			drop: function( event, ui ) {
				deleteImage( ui.draggable );
			}
		});

		/*Permitir que se suelten elementos para "Afuera" desde "Adentro" (DROP)*/
		$Afuera.droppable({
			accept: "#IDdivAdentro li",
			activeClass: "custom-state-active",
			drop: function( event, ui ) {
				recycleImage( ui.draggable );
			}
		});

		/*Funcion de Agregar Elemento hacia "Adentro"*/
		var IconoQuitar = "<a href='#' title='Quitar Elemento' class='ui-icon ui-icon-minus'>Quitar Elemento</a>";
		function deleteImage( $item ) {
			$item.fadeOut(function() {
				var $list = $( "ul", $Adentro ).length ?
					$( "ul", $Adentro ) :
					$( "<ul class='ulAfuera ui-helper-reset'/>" ).appendTo( $Adentro );

				$item.find( "a.ui-icon-plus" ).remove();
				$item.append( IconoQuitar ).appendTo( $list ).fadeIn(function() {
					$item
						.animate({ width: "48px" })
						.find( "img" )
							.animate({ height: "36px" });
				});
			});
		}

		/*Funcion de Quitar Elemento de "Adentro"*/
		var IconoAgregar = "<a href='#' title='Agregar Elemento' class='ui-icon ui-icon-plus'>Agregar Elemento</a>";
		function recycleImage( $item ) {
			$item.fadeOut(function() {
				$item
					.find( "a.ui-icon-minus" )
						.remove()
					.end()
					.css( "width", "96px")
					.append( IconoAgregar )
					.find( "img" )
						.css( "height", "72px" )
					.end()
					.appendTo( $Afuera )
					.fadeIn();
			});
		}

		/*Funcion para ampliar la imagen*/
		function viewLargerImage( $link ) {
			var src = $link.attr( "href" ),
				title = $link.siblings( "img" ).attr( "alt" ),
				$modal = $( "img[src$='" + src + "']" );

			if ( $modal.length ) {
				$modal.dialog( "open" );
			} else {
				var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
					.attr( "src", src ).appendTo( "body" );
				setTimeout(function() {
					img.dialog({
						title: title,
						width: 400,
						modal: true
					});
				}, 1 );
			}
		}

		/*Resolver el comportamiento de los iconos con la delegación de eventos*/
		$( "ul.ulAfuera > li" ).click(function( event ) {
			var $item = $( this ),
				$target = $( event.target );

			if ( $target.is( "a.ui-icon-plus" ) ) {
				deleteImage( $item );
			} else if ( $target.is( "a.ui-icon-zoomin" ) ) {
				viewLargerImage( $target );
			} else if ( $target.is( "a.ui-icon-minus" ) ) {
				recycleImage( $item );
			}

			return false;
		});
	
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/