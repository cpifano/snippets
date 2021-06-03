<?php
	#Captura POST:
	$Opcion = $_POST ['cmbCombo'];
	
	#Evaluar opcion:
	switch ($Opcion):
		case 'Redireccion':
			#Redireccion del navegador:
			header("Location: http://www.google.com/");
			break;
		case 'Autenticacion':
			#Solicitud de autenticacion por header:
			header('WWW-Authenticate: Negotiate');
			header('WWW-Authenticate: NTLM', false);
			break;
		case 'Descarga':
			#Dialogo de descarga:
			header('Content-Disposition: attachment; filename="Documento.pdf"');
		default:
			echo "Entro en default";
	endswitch;
?>