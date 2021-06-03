<html>
	<head>
		<title>Menu Principal</title>
	</head>
	
	<body>
		<!-- REFERENCIAR DOCUMENTOS PHP ------------------------- -->
		<?php
			include ('control-sesiones.php');
		?>
		<!-- ---------------------------------------------------- -->
		
		<h2>Menu Principal</h2>
		
		<form action="logout.php" method="post">
		
			<input type="submit" name="sbtIniciar" value="Cerrar Sesion" />
			
		</form>
	
	</body>
</html>
