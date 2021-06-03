<html>
	<head>
		<title>18 Deteccion de navegador</title>
	</head>
	
	<body>
	
	<?php
		#INCLUIR LIBRERIAS:
		include "browser.php";
		
		$Navegador = new Browser();
		
		echo "<br/><strong>BROWSER:</strong><br/>" . $Navegador -> getBrowser();
		echo "<br/><br/><strong>VERSION:</strong><br/>" . $Navegador -> getVersion();
		echo "<br/><br/><strong>PLATFORM:</strong><br/>" . $Navegador -> getPlatform();
		echo "<br/><br/><strong>AOL VERSION:</strong><br/>" . $Navegador -> getAolVersion();
		echo "<br/><br/><strong>USER AGENT:</strong><br/>" . $Navegador -> getUserAgent();
	?>
	
	</body>
</html>