<?php
	#Inicializar una sesion y crear el ID de la sesion:
	session_start();
	
	#Crear variable para chequeo de sesion:
	$_SESSION['Logeado'] = "Verdadero";
	
	#Capturar la cantidad de sorteos en una cookie (POST);
	setcookie("CookieCantidad", $_POST ['txtCantidad']);
	
	#Redireccionar hacia frmMenuPrincipal:
	header("Location: resultado.php");
?>