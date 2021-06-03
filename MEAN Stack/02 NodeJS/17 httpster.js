//---------------------------------------------------------------------------------------------------------------------------//
//Instalar módulo httpster:
//-g : Forma global (para que esté disponible para todas mis aplicaciones).
npm install -g httpster

//Inicializar un servidor web desde una terminal (Contenido web estático):
httpster -p 8080 -d /home/somedir/public_html

//Permite crear un servidor web de una forma más sencilla.
//Podemos evitar despachar los archivos de forma individual como hay que hacerlo con el módulo http.
const httpster = require('httpster');
//---------------------------------------------------------------------------------------------------------------------------//
