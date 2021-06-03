<?php
	#Inicializar una sesion y crear el ID de la sesion:
	session_start();
	
	#Chequeo de variable de sesion:
	if (!isset($_SESSION['Logeado'])):
		header("Location: ../index.php");
	endif;
?>