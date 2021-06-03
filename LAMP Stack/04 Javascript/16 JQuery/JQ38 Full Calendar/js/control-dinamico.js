/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	DD = '14';
	MM = '01';		/*Del 00 al 11*/ 
	YYYY = '2013';
	
	$('#IDdivCalendario').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		selectable: false,
		editable: false,
		events: [
			{
				id: 1001,
				title: 'Primer evento',
				start: '2013-02-13 16:00',
				end: '2013-02-13 17:00',
				allDay: false
			},
			{
				id: 1002,
				title: 'Segundo evento',
				start: new Date(YYYY, MM, DD, 16, 0),
				end: new Date(YYYY, MM, DD, 17, 0),
				allDay: false,
				color: '#808080',
				textColor: '#FFFFFF'
			}
		]
	});
});
/*------------------------------------------------------------------------------------------------------------*/