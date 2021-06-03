/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Flexgrid*/
	$('#IDtblFlexGrid').flexigrid({
		url: 'json-content.php',
		dataType: 'json',
		colModel : [{
			display: '*',
			name : 'input',
			width : 30,
			sortable : false,
			align: 'center'
			},{
				display: 'CI',
				name : 'idpersona',
				width : 150,
				sortable : true,
				align: 'center'
			},{
				display: 'Nombre',
				name : 'nombre',
				width : 200,
				sortable : true,
				align: 'left'
			},{
				display: 'Apellido',
				name : 'apellido',
				width : 200,
				sortable : true,
				align: 'left'
			},{
				display: 'Pais',
				name : 'pais',
				width : 200,
				sortable : true,
				align: 'left'
		}],
		buttons : [{
				name : 'Agregar',
				bclass : 'add',
				/*onpress : function()*/
			},{
				name : 'Editar',
				bclass : 'edit',
				/*onpress : function()*/
			},{
				name : 'Eliminar',
				bclass : 'delete',
				/*onpress : function()*/
			},{
				separator: true
			},
				{name: 'A', onpress: sortAlpha},
                {name: 'B', onpress: sortAlpha},
				{name: 'C', onpress: sortAlpha},
				{name: 'D', onpress: sortAlpha},
				{name: 'E', onpress: sortAlpha},
				{name: 'F', onpress: sortAlpha},
				{name: 'G', onpress: sortAlpha},
				{name: 'H', onpress: sortAlpha},
				{name: 'I', onpress: sortAlpha},
				{name: 'J', onpress: sortAlpha},
				{name: 'K', onpress: sortAlpha},
				{name: 'L', onpress: sortAlpha},
				{name: 'M', onpress: sortAlpha},
				{name: 'N', onpress: sortAlpha},
				{name: 'O', onpress: sortAlpha},
				{name: 'P', onpress: sortAlpha},
				{name: 'Q', onpress: sortAlpha},
				{name: 'R', onpress: sortAlpha},
				{name: 'S', onpress: sortAlpha},
				{name: 'T', onpress: sortAlpha},
				{name: 'U', onpress: sortAlpha},
				{name: 'V', onpress: sortAlpha},
				{name: 'W', onpress: sortAlpha},
				{name: 'X', onpress: sortAlpha},
				{name: 'Y', onpress: sortAlpha},
				{name: 'Z', onpress: sortAlpha},
				{name: '#', onpress: sortAlpha}
		],
		searchitems : [{
				display: 'ID',
				name : 'id'
			},{
				display: 'Pais',
				name : 'pais',
				isdefault: true
		}],
		sortname: "idpersona",
		sortorder: "asc",
		usepager: true,
		title: "Personas",
		useRp: true,
		rp: 10,
		showTableToggleBtn: true,
		Striped: true,
		resizable: false,
		height: 370
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/

function sortAlpha(com){ 
	jQuery('#IDtblFlexGrid').flexOptions({newp:1, params:[{name:'letter_pressed', value: com},{name:'qtype',value:$('select[name=qtype]').val()}]});
	jQuery("#IDtblFlexGrid").flexReload(); 
}