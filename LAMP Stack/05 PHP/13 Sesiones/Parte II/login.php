<?php
	#Inicializar una sesion y crear el ID de la sesion:
	session_start();
	
	#Crear variable para chequeo de sesion:
	$_SESSION['Logeado'] = "Verdadero";
	
	#Redireccionar hacia frmMenuPrincipal:
	header("Location: frmMenuPrincipal.php");
?>