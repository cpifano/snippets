<?php
	
	#CREACION DE COOKIES:
	/*
	setcookie(Nombre, Valor, Expiracion, Ruta, Dominio, secure, httponly);
	Nombre: Nombre de la cookie.
	Valor: Valor asignado a dicha cookie.
	Expiracion: Tiempo en segundos para la expiracion de la cookie.
	Ruta: La ruta dentro del servidor en la que la cookie estar� disponible. 
	Dominio: El dominio para el cual la cookie est� disponible.
	Secure: Indica que la cookie s�lo debiera transmitirse por una conexi�n segura HTTPS desde el cliente.
	Httponly: Cuando es TRUE la cookie ser� accesible s�lo a trav�s del protocolo HTTP.
	*/
	
	$Variable = 'Contenido de una variable';
	
	setcookie("PrimerCookie", "Contenido de PrimerCookie");
		
	setcookie("SegundaCookie", $Variable);
	
	#Esta cookie expira en una hora:
	setcookie("TercerCookie", "Expiro en una hora", time()+3600);
	
	#Esta cookie solo estara disponible en "/var" dentro del servidor:
	setcookie("CuartaCookie", "Tengo disponibilidad restringida", time()+3600, "/");
	
	
	#MUESTREO DE COOKIES:
	echo "Primer cookie: " . $_COOKIE["PrimerCookie"];
	
	echo "<br/><br/>";
	
	echo "Segunda cookie: " . $_COOKIE["SegundaCookie"];
	
	echo "<br/><br/>";
	
	echo "Tercer cookie: " . $_COOKIE["TercerCookie"];
	
	echo "<br/><br/>";
	
	echo "Cuarta cookie: " . $_COOKIE["CuartaCookie"];
	
	
	#ELIMINACION DE COOKIES:
	#Creo cookie para eliminar:
	setcookie("CookieEliminar", "Contenido de CookieEliminar");
	
	#Establecer la fecha de expiracion a una hora atras:
	setcookie ("CookieEliminar", "", time()-3600);
	
	echo "<br/><br/>";
	
	echo "Cookie Eliminada: " . $_COOKIE["CookieEliminar"];
?>