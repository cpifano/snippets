#---------------------------------------------------------------------------------------------------------------------------#
# DOCKER COMPOSE:
#---------------------------------------------------------------------------------------------------------------------------#
# Es una herramienta que permite simplificar el uso de Docker, generando scripts que facilitan el diseño y la construcción
# de servicios.
# Nos permite crear aplicaciones multicontenedor.
# El concepto de multicontenedor permite integrar Contenedores, Imágenes, Volúmenes, Redes y servicios de manera mas
# sencilla.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#INSTALACIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
#---------------------------------------------------------------------------------------------------------------------------#


#############################################################################################################################
#ARCHIVO DOCKER-COMPOSE.YML
#---------------------------------------------------------------------------------------------------------------------------#
#version y services son parametros obligatorios.

#VERSION DE DOCKER COMPOSE:
#Define la version de docker-compose que se va a utilizar.
version:'3'
services:
	nombre_servicio_01:
		#NOMBRE DE IMÁGEN:
		image: centos

		#NOMBRE DEL CONTENEDOR:
		container_name: nombre_contenedor_01

		#SOBREESCRIBIR EL CMD:
		command: echo "TEST"

		#REDIRECCIÓN DE PUERTOS:
		ports:
			- "80:80"

		#VOLUMENES:
		volumes:
			- "nombre_volumen_01:/directorio_container"		#Named volume 01
			- nombre_volumen_02								#Named volume 02
			- "/directorio_local:/directorio_container"		#Host volume

		#DEFINIR VARIABLES DE ENTORNO:
		enviroment:
			- "Nombre_variable=contenido"
			Nombre_variable_02: contenido

			#DEFINIR VARIABLES DE ENTORNO A TRAVÉS DE UN ARCHIVO:
			#Contenido del archivo common.env
			#Nombre_variable=contenido
			env_file: archivo_de_variables.env

		#REDES:
		networks:
			- nombre_red_automatica
			- nombre_red
				ipv4_address: 192.168.2.11

		#ESTABLECER POLITICAS DE REINICIO DEL CONTENEDOR:
		#no 				Valor por defecto, si el contenedor se detiene no reinicia.
		#on-failure 		Reinicia el contenedor si este devuelve error interno al detenerse.
		#always 			Reinicia el contenedor siempre que este se detenga.
		#unless-stopped 	Similar a always pero a diferencia que si lo detenemos manualmente este no se volverá a reiniciar.
		restart: unless-stopped

	#MULTICONTENEDOR:
	nombre_servicio_02:
		image: centos
		container_name: nombre_contenedor_02

		#DEPENDENCIAS:
		#Define que el nombre_contenedor_02 para ser creado depende de la creación previa de nombre_contenedor_01
		depends_on:
			- nombre_servicio_01

		networks:
			- nombre_red
				ipv4_address: 192.168.2.12

#DEFINIR NOMBRE DE VOLUMENES:
volumes:
	- type: bind
	name: nombre_volumen_01				#Named volume 01
	source: /directorio_local

	- type: bind
	name: nombre_volumen_02				#Named volume 02
	source: /directorio_local
	target: /directorio_container

#DEFINIR REDES:
networks:
	nombre_red_automatica:				#Si no defino parametros se creara una red con los parametros por default.
	nombre_red:
		ipam:
			driver: default				#Default (bridge)
			config:
			- subnet: 192.168.2.0/24
			  gateway: 192.168.2.1
	default:
		external:
			name: red_externa_preexistente

#############################################################################################################################

#---------------------------------------------------------------------------------------------------------------------------#
#CORRER CONTENEDOR CON DOCKER COMPOSE:
#-f : si no se especifica el archivo con -f por defecto busca el archivo docker-compose.yml
#-p : define el nombre del proyecto sino asignará uno automaticamente.
docker-compose -f nombre_archivo.yml up -d

#DETENER Y ELIMINAR CONTENEDOR CON DOCKER COMPOSE:
docker-compose down

#SOLO DETENER EL CONTENEDOR:
docker-compose stop

#REINICIAR EL CONTENEDOR:
docker-compose restart

#MOSTRAR PROCESOS EN EJECUCION DEL CONTENEDOR
docker-compose top

#VER LOGS DE COMPOSE:
docker-compose logs -f

#CONSTRUIR IMAGENES CON DOCKER-COMPOSE:
version:'3'
services:
	nombre_servicio:
		container_name: nombre_contenedor_01
		image: nombre_de_imagen_a_crear
		build: .

		#o

		build:
			context: .
			dockerfile: nombre_dockerfile

#CREAR IMAGEN:
docker-compose build
#---------------------------------------------------------------------------------------------------------------------------#
