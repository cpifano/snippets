/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Flexgrid*/
	$('.FlexGrid').flexigrid({
		usepager: true,
		title: "Titulo de tabla",
		useRp: true,
		rp: 20,
		Striped: true,
		ShowResultsPerPageSelector: true,
		showTableToggleBtn: true,
		resizable: true,
		width: 700,
		height: 370,
		singleSelect: true
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/