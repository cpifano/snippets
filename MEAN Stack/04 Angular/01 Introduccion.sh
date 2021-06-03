#---------------------------------------------------------------------------------------------------------------------------#
# INTRODUCCIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar Angular:
npm install -g @angular/cli

#Iniciar un proyecto en Angular (Workspace):
ng new nombre_aplicacion

#Ejecutar una aplicacion (Dentro del directorio de la app):
ng serve

#Podemos visualizar en (http://localhost:4200/) o utilizar el parametro --open
#--open abre automaticamente luego de compilar http://localhost:4200
ng serve --open
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# COMPILAR PARA PRODUCCIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
ng build --prod

#Se generará un directorio en nuestro directorio de proyecto llamado 'dist'.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# DEBUGGER:
#---------------------------------------------------------------------------------------------------------------------------#
# Angular nos provee una herramienta que nos permite realizar depuración deteniendo nuestro navegador al encontrar la
# sentencia debugger y habilitando las herramientas de depuración para el punto exacto en la linea que declaramos el debugger.
#---------------------------------------------------------------------------------------------------------------------------#
#Ejemplo:
fnSuma (num1: number, num1: number): number{
  console.log('Iniciando función SUMA');
  let resultado: number = num1 + num2;
  debbuger; #En este punto se detendrá el navegador he iniciará el modo de depuración.
  return resultado;
}
#---------------------------------------------------------------------------------------------------------------------------#
