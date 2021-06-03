#---------------------------------------------------------------------------------------------------------------------------#
# ENTORNOS VIRTUALES:
#---------------------------------------------------------------------------------------------------------------------------#
# Mecanismo que permite gestionar programas y paquetes python en un entorno completamente aislado y sin necesidad de tener
# permisos de administración sobre el equipo.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# LINUX (BASE DEB):
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar:
sudo apt install python-virtualenv
sudo apt install python3-virtualenv python3-venv

#Crear entorno virtual:
python3 -m venv nombre_entorno

#Activar entorno virtual:
source nombre_entorno/bin/activate

#Desactivar entorno virtual:
deactivate
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# WINDOWS:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar:
pip install virtualenv
#O a partir de la versión 3.3 podemos utilizar el módulo venv
pip install venv

#Crear entorno virtual dentro de un directorio:
virtualenv nombre_entorno

#o (venv):
python -m venv nombre_entorno

#Activar entorno:
#Ejecutar el script llamado activate dentro del directorio creado para el entorno virtual.
activate

#Desactivar entorno virtual:
#Ejecutar el script llamado deactivate dentro del directorio creado del entorno virtual.
deactivate
#---------------------------------------------------------------------------------------------------------------------------#
