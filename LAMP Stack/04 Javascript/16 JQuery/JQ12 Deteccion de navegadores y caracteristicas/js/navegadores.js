/*DOCUMENT READY:---------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Recorrer Objeto Browser*/
	jQuery.each(jQuery.browser, function(Atributo, Valor){
		$("<div>" + Atributo + " : " + Valor + "</div>" ).appendTo(document.body);
	});
	
	/*Obtener version del navegador*/
	var $Version = jQuery.browser.version;
	
	/*Mostrar informacion del navegador actual*/
	if (jQuery.browser.msie == true){
		alert ("Estas utilizando Internet Explorer - Version: " + $Version + " (Mala idea)");
	} else if (jQuery.browser.webkit == true){
		alert ("Tu navegador utiliza 'webkit', puede que uses Chrome, Safari o Maxthon - Version: " + $Version);
	} else if (jQuery.browser.mozilla == true){
		alert ("Estas utilizando Mozilla Firefox - Version: " + $Version);
	} else if (jQuery.browser.opera == true){
		alert ("Estas utilizando Opera - Version: " + $Version);
	}
	
});
/*------------------------------------------------------------------------------------*/