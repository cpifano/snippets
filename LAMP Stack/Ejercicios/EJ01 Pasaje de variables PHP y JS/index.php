<!DOCTYPE html>

<html lang="es">
	<head>
		<title>EJ01 Pasaje de variables PHP y JS</title>
	</head>
	<body>
		
		<!-- DE PHP A JAVASCRIPT:-------------------------------------- -->
		<?php
			$VariablePHP = "Contenido de mi variable PHP";
		?>

		<script>
			var VariableJS = "<?php echo $VariablePHP; ?>" ;
		</script>
		<!-- ---------------------------------------------------------- -->
		
		<!-- DE JAVASCRIPT A PHP:-------------------------------------- -->
		<script>
			var VariableJS = "Contenido de mi variable JS" ;
		</script>
		
		<?php
			$VariablePHP = "<script> document.write(VariableJS) </script>";
		?>
		<!-- ---------------------------------------------------------- -->
		
	</body>
</html>
