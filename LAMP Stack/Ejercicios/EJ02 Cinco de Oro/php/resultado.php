<!DOCTYPE html>

<html lang="es">
	<head>
		<title>Resultado</title>
		
		<!--CODIFICACION DE CARACTERES:------------------------------------------------- -->
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
		<!-- --------------------------------------------------------------------------- -->
		
		<!--REFERENCIAR DOCUMENTOS JS (JQUERY):-------------------------------------------->
		<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
		<!-- --------------------------------------------------------------------------- -->
		
		<!--REFERENCIAR ARCHIVOS PHP:--------------------------------------------------- -->
		<?php
			$Archivos = array ('control-sesiones.php', 'control-ubicacion.php', 'sorteo.php');
			
			for ($i = 0; $i < count($Archivos); $i++):
				include $Archivos [$i];
			endfor;	
		?>
		<!-- --------------------------------------------------------------------------- -->
		
		<!--REFERENCIAR LIBRERIAS DINAMICAS JS:----------------------------------------- -->
		<script type="text/javascript" src="../js/librerias.js"></script>
		<!-- --------------------------------------------------------------------------- -->
		
	</head>
	<body>
		<div class="Contenedor">
			<div class="Principal">
				<!-- IMAGEN DEL LOGO:----------------------------------------------------------- -->
				<img src = "../images/logo-min.gif" />
				<!-- --------------------------------------------------------------------------- -->
				
				<br/><br/><br/>
				<div class="Resultado">
					<div class="Bolillero">
						<h2>COMBINACIÓN MÁS SORTEADA</h2>
						
						<div class="Bolilla">
							<img id="IDimgBolillaC01" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroC01" class="Numero"><?=$vecCombinacion[0];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaC02" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroC02" class="Numero"><?=$vecCombinacion[1];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaC03" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroC03" class="Numero"><?=$vecCombinacion[2];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaC04" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroC04" class="Numero"><?=$vecCombinacion[3];?></label>
							</div>
						</div>
							
						<div class="Bolilla">
							<img id="IDimgBolillaC05" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroC05" class="Numero"><?=$vecCombinacion[4];?></label>
							</div>
						</div>
						
					</div>
					
					<div class="Bolillero">
						<h2>CINCO NÚMEROS MÁS SORTEADOS</h2>
						
						<div class="Bolilla">
							<img id="IDimgBolillaN01" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroN01" class="Numero"><?=$vecNumeros[0];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaN02" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroN02" class="Numero"><?=$vecNumeros[1];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaN03" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroN03" class="Numero"><?=$vecNumeros[2];?></label>
							</div>
						</div>
						
						<div class="Bolilla">
							<img id="IDimgBolillaN04" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroN04" class="Numero"><?=$vecNumeros[3];?></label>
							</div>
						</div>
							
						<div class="Bolilla">
							<img id="IDimgBolillaN05" class="Bolilla" src = "../images/bolillas/transparente.png" />
							
							<div class="Numero">
								<label id="IDlblNumeroN05" class="Numero"><?=$vecNumeros[4];?></label>
							</div>
						</div>
						
					</div>
				
				</div>
				
				<div class="Premios">
					<img class="Premios" src = "../images/tabla-premios.png" />
				</div>	
				
				<br/><br/>
				
				<form id="IDfrmPrincipal" name="frmPrincipal" class="Principal" method="post" action="logout.php">
					<fieldset>
						<!--VOLVER:----------------------------------------------------------------- -->
						<input type="submit" id="IDsbtVolver" value="Volver a Jugar" />
						<!-- ----------------------------------------------------------------------- -->
						
						<!--VER REGLAS:------------------------------------------------------------- -->
						<input type="button" id="IDbtnDetalles" value="Ver Detalles" />
						<!-- ----------------------------------------------------------------------- -->
					</fieldset>
				</form>
				<br/><br/>
				
				<div id="IDdivReglas" class="Reglas">
					<?php include ('muestreo.php'); ?>
				</div>
			</div>
		</div>
		
		<div class="ContenedorAutores">
			<img src = "../images/olimac-logo.png" /><br/>
			<div class="Autores">
				HTML, CSS, JavaScript, PHP<br/>
				Camilo Pifano<br/>
				2012
			</div>
		</div>
		
	</body>
</html>