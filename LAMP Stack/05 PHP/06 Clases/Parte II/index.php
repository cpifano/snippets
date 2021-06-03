<html>
	<head>
		<title>06 Clases Parte II</title>
	</head>
	<body>
	
<?php

	#CREACION DE UNA CLASE:
	class VISIBILIDAD {
	 
		#DEFINICION DE ATRIBUTOS:
		#Sera de visibilidad o acceso desde dentro y fuera de la clase.
		public $PUBLICO = "<br/>Hola atributo public";
		 
		#Solo sera accesible desde la misma clase donde fueron definidos y en sus subclases.
		protected $PROTEGIDO = "<br/>Hola atributo protected";
		 
		#Sera accesible sólo desde la misma clase donde fue definido.
		private $PRIVADO = "<br/>Hola atributo private";
		 
		#METODO DE CLASE:
		function Saludo (){
		 	echo "<br/><br/>Saludo:";
			echo $this->PUBLICO;
			echo $this->PROTEGIDO;
			echo $this->PRIVADO;
		}
	}		 


	#EXTENSION DE CLASE VISIBILIDAD (SUB-CLASE):
	class SUBCLASE extends VISIBILIDAD {
		function Saludo_Extendido (){
			echo "<br/><br/>Saludo Extendido:";
			echo $this->PUBLICO;
			echo $this->PROTEGIDO;
			#echo $this->PRIVADO;		#Esta linea generaría un error por visivilidad.
		}
	}

	 
	#INSTANCIACION DE UNA CLASE:
	$MiVisibilidad = new VISIBILIDAD;
	 
	#MUESTREO:
	echo $MiVisibilidad->PUBLICO;		#Funciona.
	#echo $MiVisibilidad->PROTEGIDO;	#Esta linea generaría un error por visivilidad.
	#echo $MiVisibilidad->PRIVADO;		#Esta linea generaría un error por visivilidad.
	$MiVisibilidad->Saludo();			#Muestra PUBLICO, PROTEGIDO y PRIVADO.
	 
	#INSTANCIACION DE UNA CLASE EXTENDIDA (SUB-CLASE):
	$MiSubClase = new SUBCLASE;
	 
	#MUESTREO:
	$MiSubClase->Saludo_Extendido();	#Muestra PUBLICO y PROTEGIDO
	
?>
	
	</body>
</html>