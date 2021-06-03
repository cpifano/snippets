<html>
	<head>
		<title>08 Formularios HTML (GET y POST)</title>
	</head>
	<body>
	

	<!--METODO GET:--> 
	<form action="index.php" method="get">
		<label>Publico: </label><input type="text" name="txtPublico"><br/>
		<input type="submit" name="sbtEnvGet" value="Enviar GET">
	</form>

	<!--METODO POST:-->
	<form action="index.php" method="post">
		<label>Oculto: </label><input type="text" name="txtOculto"><br/>
		<input type="submit" name="sbtEnvPost" value="Enviar POST">
	</form>
	
<?php
	#METODO GET
	#Mostrara la informacion ingresada en la URL.
	$PUBLICO = $_GET ['txtPublico'];
	echo "<br/>" . $PUBLICO;
	
	#METODO POST:
	#No mostrara informacionen en la URL.
	$OCULTO =$_POST ['txtOculto'];
	echo "<br/>" . $OCULTO;
?>
	
	</body>
</html>