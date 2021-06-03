/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Gomenzar a grabar en la resolucion especificada*/
	$('#IDdivWebCam').html(webcam.get_html(320, 240));
	
	/*Código para manejar la respuesta del servidor*/
	webcam.set_hook('onComplete', 'my_completion_handler');
	
	/*Agregar eventos a los botones*/
	$("#IDbtnConfiguracion").click(function(){webcam.configure();});
	$("#IDbtnCaptura").click(function(){take_snapshot();});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/

function take_snapshot() {
	//Tomar foto y subirla al servidor:
	document.getElementById('upload_results').innerHTML = '<strong>Subiendo foto...</strong>';
	webcam.snap();
}
						
function my_completion_handler(msg) {
	//Extraer URL fuera de la salida PHP:
	if (msg.match(/(http\:\/\/\S+)/)) {
		var image_url = RegExp.$1;
		// Mostrar imagen JPEG:
		document.getElementById('upload_results').innerHTML = 
			'<img src="' + image_url + '"><br/><strong>¡Guardado exitoso!</strong>';
		
		//Resetear la camara despues de tomar la foto:
		webcam.reset();
	}
	else alert("PHP Error: " + msg);
}