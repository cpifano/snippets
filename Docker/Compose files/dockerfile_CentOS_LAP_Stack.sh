FROM centos

LABEL description="CentOS Apache PHP"
LABEL version="1.0"
LABEL autor="Camilo Pifano"

RUN yum -y install \
	httpd \
	php \
	php-cli \
	php-common \
	php-mysql \
	
RUN echo "<?php phpinfo(); ?>" > /var/www/html/index.php

EXPOSE 80

CMD apachectl -DFOREGROUND