#---------------------------------------------------------------------------------------------------------------------------#
# INTRODUCCIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar Angular (forma global):
npm install -g @angular/cli

#Iniciar un proyecto en Angular (Workspace):
ng new nombre_aplicacion

#Ejecutar una aplicacion / Iniciar servidor Front-End (Dentro del directorio de la app):
ng serve

#Podemos visualizar en (http://localhost:4200/) o utilizar el parametro --open
#--open abre automaticamente luego de compilar http://localhost:4200
ng serve --open
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# COMPILAR PARA PRODUCCIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
ng build --prod

#Se generará un directorio en nuestro directorio de proyecto (min) llamado 'dist'.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# ESTRUCTURA DE UN PROYECTO DE ANGULAR:
#---------------------------------------------------------------------------------------------------------------------------#
# src/main.ts
# Archivo principal que concentra e inicia la aplicación desde 'bootstrapModule(AppModule)'.

# src/app.module.ts (AppModule):
# Es el módulo principal de la aplicación.
# - declarations: Define cuales serán los componentes que vamos a utilizar.
# - imports: Define los módulos externos que vamos a importar sobre este módulo.
# - providers: Define los servicios y librerias que vayamos a integrar a nuestro proyecto.
# - bootstrap: Define cual será el componente de entrada del proyecto.

# src/app/app.component.ts (AppComponent):
# Es el componente principal del proyecto.
# Es quien concentra la lógica de funcionamiento y/o parte de algún elemento (objeto).

# src/app/app.component.html (Template):
# Es el template del componente principal.

# src/app/app.component.css (Hoja de estilos):
# Es la hoja de estulos del componente principal.
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
