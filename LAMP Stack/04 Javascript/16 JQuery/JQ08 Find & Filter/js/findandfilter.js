
/*SELECCION DE ELEMENTOS (FIND AND FILTER):------------------------------------------*/
$(document).ready(function(){
	$("#IDbtnFilter").click(function () {
		$('div').css('background-color','#FFFFFF');
		$('div').filter('#IDFrutas').css('background-color','#DDDDEE');
	});

	$("#IDbtnFind").click(function () {
		$('div').css('background-color','#FFFFFF');
		$('div').find('#IDFrutas').css('background-color','#DDDDEE');
	});
});
/*------------------------------------------------------------------------------------*/