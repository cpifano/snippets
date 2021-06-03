#---------------------------------------------------------------------------------------------------------------------------#
# CONCEPTOS Y CARACTERISTICAS BÁSICAS DE LA ARQUITECTURA DE KUBERNETES:
#---------------------------------------------------------------------------------------------------------------------------#
# Nodos:
# Son máquinas (físicas o virtuales) que pueden correr contenedores.

# Service discovery:
# Nos permite realizar la distribución de carga y tolerancia a fallas.

# Rollouts:
# Nos permite realizar el despliegue de una actualización en caliente (sin down-time).

# Rollbacks:
# En caso de falla en el despliegue de la actualización el Rollback nos permitira volver a la versión anterior.

# Self-healing
# Permite la creación de un nuevo contenedor en caso de que uno haya muerto.

# Optimización de recursos en los nodos.
# K8 posee un "Master" que se encarga de realizar la optimización de los recursos de cada nodo y permite una asignación
# más eficiente de la carga de trabajo a los mismos (containers).

# K8 nos permite el escalamiento horizontal.
#---------------------------------------------------------------------------------------------------------------------------#


#############################################################################################################################
# KUBERNETES MASTER:
#---------------------------------------------------------------------------------------------------------------------------#
# KUBE API SERVER:
# Acepta requests en formato JSON.

# El comando kubectl nos brinda la posibilidad de enviar una directiva al Kube API Server.
# La directiva que se envíe por kubectl sera traducida a formato JSON para ser enviada al Kube API Server.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# SCHEDULER:
# Recibe las peticiones de Kube API Server, revisa los nodos potencialmente buenos para la operación y determina el nodo
# que recibira la petición en base a distintas variables.
# - Cantidad de containers de nodos potencialmente buenos.
# - Recursos que requiere el container.
# - Recursos que posee cada nodo, etc.

# En caso de que el Scheduler no encuentre un nodo con recursos suficientes para la petición, la misma quedará en estado
# pendiente. Si algún nodo libera los recursos suficientes el Scheduler asignará dicha petición pendiente al mismo.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# KUBE CONTROLLER MANAGER:
# Es el controlador de Kubernetes el cual posee las siguientes herramientas:
# Node controller: se encarga del "self-healing".
# Replication controller: encargado de mantener y garantizar todas las replicas del cluster.
# Endpoint controller: servicios y bots a nivel de redes (CONTINUAR).
# Service account controller: Autenticación (CONTINUAR).
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# ETCD:
# Es una base de datos (clave, valor) donde el cluster almacena estados, backups, etc.
# Esta base de datos nos permite el sistema de control de versiones y garantiza el funcionamiento de los Rollbacks.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CLOUD-CONTROLLER-MANAGER:
# Es el controlador que nos permitirá llevar a cabo la integración con tecnologías CloudComputing (AWS, Azure, etc).
#---------------------------------------------------------------------------------------------------------------------------#
#############################################################################################################################


#############################################################################################################################
# NODO KUBERNETES:
#---------------------------------------------------------------------------------------------------------------------------#
# KUBELET:
# Es un servicio que corre en cada nodo.
# Es el responsable de recibir ordenes desde el master y enviar información al mismo.
# Procesa la información y comunica con el runtime de contenedores (Por Ejemplo: Docker), para que implemente lo solicitado.
# Dentro de la información que envía al Master, envía información estadística al Kube API Server.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# KUBE PROXY:
# Es un servicio que corre en cada nodo.
# Se encarga de todo lo que respecte en cuanto a redes.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CONTAINER RUNTIME:
# Runtime para manejo de containers (Docker, Containerd, CRI-O).
#---------------------------------------------------------------------------------------------------------------------------#
#############################################################################################################################
