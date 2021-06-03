#---------------------------------------------------------------------------------------------------------------------------#
# DOCKERFILE USANDO TLS-SSL:
#---------------------------------------------------------------------------------------------------------------------------#
#Generar certificado autofirmado con OpenSSL (.key y .crt):
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout docker_ca.key -out docker_ca.crt
#---------------------------------------------------------------------------------------------------------------------------#

#Contenido del archivo Dockerfile:--------------------------------------------------#
FROM centos:7

RUN yum -y install \
	httpd \
	php php-cli php-common \
	mod_ssl openssl


RUN echo "<?php phpinfo(); ?>" > /var/www/html/info.php

RUN mkdir /certificates

COPY docker_ca.crt /certificates
COPY docker_ca.key /certificates

COPY webDirectory /var/www/html

COPY ssl.conf /etc/httpd/conf.d/default.conf

EXPOSE 443

CMD apachectl -DFOREGROUND
#-----------------------------------------------------------------------------------#

#Contenido del archivo ssl.conf:----------------------------------------------------#
<VirtualHost *:443>
 ServerName localhost
 DocumentRoot /var/www/html
 SSLEngine on
 SSLCertificateFile /certificates/docker_ca.crt
 SSLCertificateKeyFile /certificates/docker_ca.key
</VirtualHost>
#-----------------------------------------------------------------------------------#

#CREAR IMAGEN:
docker build -t lamp:ssl .

#CREAR CONTENEDOR:
docker run -d --name lamp_ssl -p 443:443 lamp:ssl
#---------------------------------------------------------------------------------------------------------------------------#
