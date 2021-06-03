#---------------------------------------------------------------------------------------------------------------------------#
# IMÁGENES:
#---------------------------------------------------------------------------------------------------------------------------#
#DESCARGAR UNA IMAGEN OFICIAL DE MONGODB (latest version):
docker pull mongo

#DESCARGAR VERSION ESPECIFICA USANDO UN TAG:
docker pull mongo:3.6.5-jessie

#VER TODAS LAS IMAGENES:
docker images

#VER IMAGENES HUERFANAS:
docker images -f dangling=true

#CREAR IMAGEN:
nano Dockerfile

#Contenido del archivo Dockerfile:--------------------------------------------------#
#Si no se especifica el :tag hace pull de latest
#Definir sistema base:
FROM centos:7.6.1810

#Instalar Apache:
RUN yum -y install httpd

o

RUN yum -y install apache2

#Correr apache en primer plano:
CMD apachectl -DFOREGROUND

o

CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]
#-----------------------------------------------------------------------------------#

#CONSTRUIR IMAGEN:
#-t tag
#Si no se define :NombreTag utiliza latest por defecto.
#Si no se define nombre de archivo por defecto va a buscar un archivo llamado Dockerfile
docker build -t NombreImagen:NombreTag .
docker build --tag NombreImagen:NombreTag .

#-f Especificar nombre de archivo
docker build --tag NombreImagen:NombreTag -f dockerfile_lamp .

#VER HISTÓRICO DE UNA IMAGEN:
#-H Formato para humanos.
docker history -H NombreImagen:NombreTag

#ELIMINAR IMAGEN:
docker rmi IDImagen
docker rmi NombreImagen:NombreTag

#Eliminar imagenes huerfanas por lote:
#-q solo retorna los IDs de las imágenes.
docker images -f dangling=true -q | xargs docker rmi

#Eliminar todas las imágenes:
docker rmi $(docker images -q)
#---------------------------------------------------------------------------------------------------------------------------#
