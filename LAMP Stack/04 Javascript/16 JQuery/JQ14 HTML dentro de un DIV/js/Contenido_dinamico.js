/*Funcion HTML en DIV*/
function HTML_en_DIV(IDDiv, URL_HTML){
	$('#' + IDDiv).load(URL_HTML);
}

/*Correccion de codificacion de caracteres*/
$.ajaxSetup({
	'beforeSend' : function(xhr) {
	xhr.overrideMimeType('text/html; charset=iso-8859-1');
	}
});