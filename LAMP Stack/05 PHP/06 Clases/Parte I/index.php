<html>
	<head>
		<title>06 Clases Parte I</title>
	</head>
	<body>
	
<?php

	 #CREACION DE UNA CLASE:
	 class AUTO {
	 	
	 	#ATRIBUTOS SIMPLES:
	 	var $Color = "Rojo";
	 	
	 	#ATRIBUTOS ESTATICOS:
	 	static $Estatico = "Soy un atributo estatico...";
	 	
	 	#METODOS DEL OBJETO:
	 	function Andar () {
	 		echo "<br/>Run run runnnnn...";	
	 	}
	 	
	 	static function Metodo_Es (){
	 		#Dentro de una funcion estatica solo
	 		#se podrá acceder a atributos estaticos.
	 		$Mensaje = "<br/>Yo tambien " . AUTO::$Estatico;
	 		echo $Mensaje; 
	 	}
	 }

	 #ACCEDER AL CONTENIDO DE UN ATRIBUTO ESTATICO:
	 #No es necesario instaciar un objeto para acceder
	 #al contenido de un atributo estatico de una clase.
	 echo "<br/>Contenido de Atributo Estatico: " . AUTO::$Estatico;
	 
	 #INVOCAR UN METODO ESTATICO:
	 #Tampoco será necesario instanciar un objeto nuevo
	 #para acceder a un metodo estatico de una clase.
	 AUTO::Metodo_Es();
	 
	 
	 #ACCEDER AL CONTENIDO DE UN ATRIBUTO SIMPLE:
	 #Para acceder al contenido de un atributo simple
	 #necesario hacerlo desde un objeto de la clase.
	 
	 #INSTANCIAR UN OBJETO:
	 $MiAuto = new AUTO;
	 
	 #Acceder al contenido del atributo simple:
	 echo "<br/><br/>Contenido de Atributo Color: " . $MiAuto->Color;
	 
	 #INVOCAR UN METODO DE MI OBJETO:
	 $MiAuto->Andar();
?>
	
	</body>
</html>