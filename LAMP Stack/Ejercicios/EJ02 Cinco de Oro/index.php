<!DOCTYPE html>

<html lang="es">
	<head>
		<title>EJ02 Cinco de Oro</title>
		
		<!--CODIFICACION DE CARACTERES:------------------------------------------------- -->
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
		<!-- --------------------------------------------------------------------------- -->
			
		<!--REFERENCIAR DOCUMENTOS JS (JQUERY):-------------------------------------------->
		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
		<!-- --------------------------------------------------------------------------- -->
		
		<!--REFERENCIAR ARCHIVOS PHP:--------------------------------------------------- -->
		<?php include ('php/control-ubicacion.php'); ?>
		<!-- --------------------------------------------------------------------------- -->
		
		<!--REFERENCIAR LIBRERIAS DINAMICAS JS:----------------------------------------- -->
		<script type="text/javascript" src="js/librerias.js"></script>
		<!-- --------------------------------------------------------------------------- -->
		
	</head>
	<body>
		<div class="Contenedor">
			<div class="Principal">
				<!-- IMAGEN DEL LOGO:----------------------------------------------------------- -->
				<img src = "images/logo.png" />
				<!-- --------------------------------------------------------------------------- -->
				
				<br/><br/><br/>
				
				<form id="IDfrmPrincipal" name="frmPrincipal" method="post" action="php/login.php">
					<fieldset>
						<!--CANTIDAD:---------------------------------------------------------------- -->
						<label>Cantidad de sorteos a realizar</label><br/>
						<input type="text" id="IDtxtCantidad" name="txtCantidad" class="required digits" maxlength="4" />
						<!-- ----------------------------------------------------------------------- -->
						
						<br/>
						
						<!--SORTEAR:---------------------------------------------------------------- -->
						<input type="submit" id="IDsbtSortear" value="Sortear" />
						<!-- ----------------------------------------------------------------------- -->
						
						<!--VER REGLAS:------------------------------------------------------------- -->
						<input type="button" id="IDbtnReglas" value="Como Jugar" />
						<!-- ----------------------------------------------------------------------- -->
					</fieldset>
				</form>
				
				<br/><br/>
				
				<div id="IDdivReglas" class="Reglas">
					<h2>Aspectos reglamentarios generales</h2> 
					
					<ul>
						<li>Se debe determinar la cantidad de veces que el programa realizará el sorteo.</li>
						<li>El programa sorteará X cantidad de veces (según lo indicado) y mostrará los siguientes resultados:</li>
							<dd>- La combinación de cinco números que más aparecen en todos los sorteos.</dd>
							<dd>- Los cinco números (individuales) que más aparecen en todos los sorteos.</dd>
					</ul>
					
					<br/><br/><hr/>
				
					<h2>Aspectos reglamentarios del 5 de oro</h2> 
					
					<ul>
						<li>Se realizan dos sorteos: el "5 DE ORO" y la "REVANCHA".</li>
						<li>Si los pozos del "5 DE ORO" o de la "REVANCHA" no tienen acierto, se acumulan para los el próximo sorteo.</li>
						<li>Se Juega eligiendo 5 números entre 44 posibles (del 01 al 44).</li>
					</ul>
					
					<br/><br/><hr/>
					
					<h2>Premios</h2>
					<div class="PremiosPrincipal">
						<img class="Premios" src = "/images/tabla-premios.png" />
					</div>	
					
				</div>
				
			</div>
		</div>
		
		<div class="ContenedorAutores">
			<img src = "images/olimac-logo.png" /><br/>
			<div class="Autores">
				HTML, CSS, JavaScript, PHP<br/>
				Camilo Pifano<br/>
				2012
			</div>
		</div>
		
	</body>
</html>