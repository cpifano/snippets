/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear calendario*/
	$('#IDdivCalendario').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		selectable: false,
		editable: false,
		events: "js/json-events.php"
	});
	
});
/*------------------------------------------------------------------------------------------------------------*/