#---------------------------------------------------------------------------------------------------------------------------#
# NAMESPACES:
# Permite la creación de un cluster "virtual" dentro del Cluster Master.
# De esta forma podemos ir separando de forma lógica ambientes en cluster virtuales completos.
# Los recursos de un cluster virtual no tendran acceso a los recursos de otro cluster mas que en el que se encuentran definido.
# A su vez esta separación lógica nos permite la posibilidad de poder brindar acceso a clusters más pequeños sin necesidad
# de tener que brindar acceso al Cluster Master y todos los ecosistemas que allí se encuentren.
# Los namespaces nos brindan la posibilidad de limitar los recursos de el cluster virtual.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Ver namespaces:
kubectl get namespaces
#---------------------------------------------------------------------------------------------------------------------------#
