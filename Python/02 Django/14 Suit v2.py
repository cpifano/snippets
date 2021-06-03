#---------------------------------------------------------------------------------------------------------------------------#
# DJANGO SUIT V2:
#---------------------------------------------------------------------------------------------------------------------------#
#Requerimientos previos:
pip3 install django==1.10
pip3 install Sphinx==1.3.5
pip3 install sphinx-rtd-theme==0.1.9
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Instalar django-suit v2:
pip3 install https://github.com/darklow/django-suit/tarball/v2

#Crear la siguiente clase en (nombre_app/apps.py):
from suit.apps import DjangoSuitConfig

class SuitConfig(DjangoSuitConfig):
    layout = 'horizontal'   # or vertical

#Agregar la app a settings.py:
INSTALLED_APPS = (
    ...
    'nombre_app.apps.SuitConfig',
    'django.contrib.admin',
)
#---------------------------------------------------------------------------------------------------------------------------#
