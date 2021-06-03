#---------------------------------------------------------------------------------------------------------------------------#
# MULTI-STAGE-BUILD:
#---------------------------------------------------------------------------------------------------------------------------#
# La utilidad del Multi-Stage-Build es generar un escenario de contrucción temporal para obtener algún recurso en particular.
# Esto por otra parte permite que la imágen resultante sea más liviana.
#---------------------------------------------------------------------------------------------------------------------------#

#Contenido del archivo Dockerfile:--------------------------------------------------#
#DEFINIR UN ALIAS 'constructor':
FROM centos as constructor

RUN fallocate -l 20M /opt/test2

#El último FROM es el que prepondera:
FROM alpine

#Copiar de 'constructor' el archivo resultante a la imagen actual:
COPY --from=constructor /opt/test2 /opt/myfile
#-----------------------------------------------------------------------------------#

#OTRO EJEMPLO DE USO:
#Contenido del archivo Dockerfile:--------------------------------------------------#
FROM maven:3.5-alpine as builder

COPY app /app

RUN cd /app && mvn package

FROM openjdk:8-alpine

COPY --from=builder /app/target/my-app-1.0-SNAPSHOT.jar /opt/app.jar

CMD java -jar /opt/app.jar
#-----------------------------------------------------------------------------------#
#---------------------------------------------------------------------------------------------------------------------------#
