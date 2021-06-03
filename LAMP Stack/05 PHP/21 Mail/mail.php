<?php

	$email = "casilla@dominio.com";
	$asunto = "Asunto del correo";
	$mensaje = "Envio de correo por PHP";

	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-Type: text/html; charset=UTF-8";
	$headers[] = "From: INSTITUCIÓN (No responder) <no-reply@dominio.com>";

	if ( mail($email, $asunto, $mensaje, implode("\r\n", $headers)) ):
		echo("<p>El mensaje ha sido enviado!</p>");
	else:
		echo("<p>Fallo el envio del mensaje�</p>");
	endif;

?>
