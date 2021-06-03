#---------------------------------------------------------------------------------------------------------------------------#
# DOCKERFILE:
#---------------------------------------------------------------------------------------------------------------------------#
#FROM:
#Es el punto de partida que tendrá la imágen de Docker (Sistema operativo u otra imágen inclusive).
FROM centos:7

#RUN:
#La instrucción RUN ejecutará cualquier comando en una nueva capa encima de la imagen actual y confirmará los resultados.
#La imagen confirmada resultante se utilizará para el siguiente paso en el Dockerfile.
RUN yum -y install apache2

#COPY/ADD:
#Permite copiar o agregar archivos del equipo anfitrion al contenedor de Docker.
#COPY recupera URL y copia al directorio establecido.
#ADD recupera URL y descomprime en caso de tener algun archivo comprimido u empaquetado.
#En caso de ser simples directorios no hay diferencias, se recomienda igualmente el uso de copy para este caso.
COPY appWeb /var/www/html/
ADD appWeb /var/www/html/

#ENV:
#Permite agregar variables de entorno.
ENV NombreVariable ContenidoVariable

RUN echo "$NombreVariable" > /var/www/html/log.txt

#WORKDIR:
#Determina el directorio de trabajo donde estamos situados en el contenedor de Docker.
WORKDIR /var/www/html

COPY appWeb .

#EXPOSE:
#Permite determinar que puertos exponer y para que tipo de servicios.
EXPOSE 80/tcp
EXPOSE 80/udp

#LABEL:
#Permite definir etiquetas con metadatos con información adicional a la imágen.
LABEL description="Aplicación web para gestión ..."
LABEL version="1.0"
LABEL autor="Camilo Pifano"

#USER:
#Define el usuario que ejecutara las tareas (root por defecto).
#USER <UID>[:<GID>]
USER cpifano

#VOLUME:
#Crea un punto de montaje en comun (Volumen anonimo) donde se establece una interseccion de archivos entre el equipo
#anfitrion y el contenedor.
#De esta forma pueden persistir los datos del contenedor una vez eliminado.
VOLUME /var/www/html

#CMD:
#Permite ejecutar un comando o script (Es quien mantiene realmente viva la ejecución del contenedor).
#Solo puede haber una instrucción CMD en un Dockerfile. Si enumera más de una CMD, solo la última CMD surtirá efecto.
CMD apachectl -DFOREGROUND

#El CMD puede estar en blanco para poder correr el contenedor.
#En este caso va a tomar por defecto el CMD que esté definido para esa imagen.
CMD

#DOCKERIGNORE:
#Permite ignorar archivos que se encuentren en el directorio de trabajo actual.
nano .dockerignore

README.md
/unused/*
*.csv
#---------------------------------------------------------------------------------------------------------------------------#
