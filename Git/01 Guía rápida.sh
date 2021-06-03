#---------------------------------------------------------------------------------------------------------------------------#
# INSTALACIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
#Debian/Ubuntu:
apt-get install git

#CentOS / Fedora:
yum install git
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CONFIGURACIONES GLOBALES:
#---------------------------------------------------------------------------------------------------------------------------#
#Establecer nuestro nombre de usuario:
git config --global user.name "root"

#Ver nombre:
git config --global user.name

#Establecer correo:
git config --global user.email "correo@casilla.com"

#Ver correo:
git config --global user.email

#Activar referencia de colores para la consola:
git config --global color.ui true

#Mostrar configuraciones actuales:
git config --global --list
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CREAR PROYECTO:
#---------------------------------------------------------------------------------------------------------------------------#
#Marca el inicio de nuestro proyecto (Dentro del directorio del proyecto):
#A partir de este momento Git comenzará a monitorear nuestros archivos.
git init

#Retornar el estado de nuestro proyecto:
git status
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# STAGE:
#---------------------------------------------------------------------------------------------------------------------------#
#Agregar al stage (Archivos listos para ser commiteados):
git add nombre_archivo

#El parametro -A agrega al stage todo lo que esté pendiente para ser enviado:
git add -A

#Unstage: Quitar archivo del stagging area
git reset HEAD nombre_archivo
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# COMMITS:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear commit (Guardar cambios):
git commit -m "Mensaje asociado al commit"

#--amend: Permite enmendar o cambiar el mensaje en caso de equivocarnos:
git commit --amend -m "Mensaje corregido"

#Devuelve una lista de todos nuestros commits:
git log

#--pretty=oneline Nos retorna en un formato de una sola linea más amable.
#-10 indica que nos muestre solo los últimos 10 commits.
git log --pretty=oneline -10

#Volver a un commit anterior:
git checkout <SHA-1>

#Vuelve el archivo al estado en que estaba en el commit <SHA-1>:
git checkout <SHA-1> nombre_archivo

#Si <SHA-1> es "--", "HEAD" o no se especifica, se toma el ultimo commit.
#Ejemplo: descartar cambios en copia local.
git checkout -- nombre_archivo
git checkout HEAD nombre_archivo
git checkout nombre_archivo

#Vuelve a la rama principal (master):
git checkout master

#Borrar un commit:
#--soft No toca el codigo del directorio de trabajo, solo borra el commit.
#--mixed No toca staging area.
#--hard Borra todo lo que este asociado al commit.
#Si <SHA-1> es "--", "HEAD" o no se especifica, se toma el ultimo commit
git reset --hard <SHA-1>
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# BRANCH & MERGE:
#---------------------------------------------------------------------------------------------------------------------------#
#La rama master es la rama principal y estable de nuestro proyecto.

#Muestra las ramas del proyecto:
git branch

#Muestra las ramas ocultas:
git branch -a

#Crear una rama:
git branch nombre_rama

#Movermos a una rama:
git checkout nombre_rama

#Borrar una rama:
git branch -D nombre_rama

#Fusionar cambios de una rama hacia master:
#Posiciondo desde la rama master: git checkout master
git merge nombre_rama

#Crear una rama y situarse en ella al mismo tiempo:
git checkout -b nombre_rama
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CLONAR REPOSITORIOS:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear una copia local del repositorio:
git clone /ruta/del/repositorio

#Crear una copia del repositorio del servidor remoto (SSH):
git clone usuario@host:/ruta/del/repositorio

#Crear una copia de un repositorio remoto publico (Github - Bitbucket):
git clone URL_del_repositorio
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# GESTIONAR REPOSITORIOS REMOTOS:
#---------------------------------------------------------------------------------------------------------------------------#
#Vincular un repositorio Local a un repositorio Remoto:
#Posicionado en el directorio Local del proyecto:
git remote add origin URL_del_repositorio

#Listar ramas con información adicional de cada una (?):
git remote -v

#Quitar o desvincular repositorio Local de repositorio Remoto:
git remote remove origin

#Enviar cambios entre el repositorio Local al Remoto:
#-f: forzar
#nombre_rama (master)
git push origin nombre_rama

#En todos los commits, verá etiquetas.
#Una se llama "master", la rama maestra en nuestra computadora.
#La rama maestra en del repositorio remoto llamada "origin".
#Y la otra se llama "origin/master" la rama local oculta de nuestra computadora
#Cuando se traen cambios del repositorio remoto, primero llegan a esta rama local oculta (origin/master).

#Trae los cambios del repositorio remoto al repositorio local oculto origin/master:
git fetch origin

#Fusionar los cambios de la rama local oculta origin/master a la rama master local (PRODUCCIÓN).
git merge origin/master

#Si existen conflictos (Ej.: Cuando varios usuarios modifican la misma linea al mismo tiempo),
#se tendran que corregir de forma manual y enviar un commit con el elemento que genera el confilcto
#que Git no puede resolver por si solo (Depende de una desición humana).

#Traer cambios de un fork (Cambios que tenga el origen de nuestro fork):
git fetch upstream
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# GIT TAGS:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear un tag (con anotaciones):
#Asigna el tag al último commit.
git tag -a v1.0 -m "Mensaje"

#Asigna el tag al commit especificado con <SHA-1>:
git tag -a v1.0 -m "Mensaje" <SHA-1>

#Crear un tag ligero:
git tag v1.0

#Enviar tags al repositorio remoto:
#Cuando se hace un envio (push) de los cambios entre nuestro repositorio local con respecto al remoto,
#los tags no se envían de forma atomática, hay que hacerlo de forma explícita.
git push origin v1.0

#Enviar todos los tags al repositorio remoto:
git push origin --tags
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# GITHUB PAGES:
#---------------------------------------------------------------------------------------------------------------------------#
# Permite hostear un sitio (Frontend) gratuito en github.io
#---------------------------------------------------------------------------------------------------------------------------#
#Crear un repositorio en Github con la siguiente nomeclatura:
nombre_usuario_organizacion.github.io

# En el caso de crear paginas (Demos) de proyectos se puede crear una rama llamada gh-pages
# y Github interpretará que allí estará la página del proyecto.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# GIT HOOKS:
#---------------------------------------------------------------------------------------------------------------------------#
# Es un mecanismo para activar scripts cuando sucenden ciertas acciones en Git.
#---------------------------------------------------------------------------------------------------------------------------#
#Lista de Git Hooks:
# applypatch-msg, pre-applypatch ,post-applypatch, pre-commit, prepare-commit-msg,
# commit-msg, post-commit, pre-rebase, post-checkout, post-merge, pre-push, pre-receive,
# update, post-receive, post-update, pre-auto-gc, post-rewrite.

#Dentro del directorio .git dentro de nuestro proyecto se encuentra la carpeta contenedora de Git Hooks.
#Si creamos un archivo con un nombre dentro de la lista de Git Hooks, podemos escribir un ShellScript
#que se ejecute segun el Hook que nombremos.

#Por ejemplo 'post-commit' se activa cuando hagamos cuando hagamos un 'commit'.
#---------------------------------------------------------------------------------------------------------------------------#
