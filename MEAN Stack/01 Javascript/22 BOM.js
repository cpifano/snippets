//---------------------------------------------------------------------------------------------------------------------------//
// BOM: Browser Object Model
//---------------------------------------------------------------------------------------------------------------------------//
// Es la WebAPI que nos permite manejar determinados elementos del navegador a través de JS.
//---------------------------------------------------------------------------------------------------------------------------//
//Extraer propiedades del navegador:
const ancho_de_ventana_viewport = window.innerWidth; //Espacio de trabajo actual
const alto_de_ventana_viewport = window.innerHeight; //Espacio de trabajo actual
const ancho_de_ventana_navegador = window.outerWidth; //Resolución pantalla
const alto_de_ventana_navegador = window.outerHeight; //Resolución pantalla

const control_scroll_X = window.scrollX; //Retorna el valor en pixeles.
const control_scroll_Y = window.scrollY; //Retorna el valor en pixeles.

const resultado_booleano = window.closed;     //Indica si la ventana referenciada está cerrada o no.
const resultado_booleano = window.fullScreen; //Indica si la ventana se presenta en modo de pantalla comleta o no.

//EVENTOS:
window.addEventListener('resize', (e) => { /* Cuando se redimensione la ventana */ });
window.addEventListener('scroll', (e) => { /* Cuando se mueva el scroll */ });
window.addEventListener('load', (e) => { /* Cuando la ventana del navegador haya cargado (Cargará despues del Document Ready) */ });
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MÉTODOS:
//---------------------------------------------------------------------------------------------------------------------------//
//Método Alerta:
window.alert("Mensaje de alerta JS");

//Método Confirmación:
const resultado_booleano = window.confirm("Mensaje de confirmación");

//Mensaje de aviso con un input:
const valor_input = window.prompt("Ingrese un valor:");

//Abrir una nueva ventana (pestaña):
window.open("http://sitio.com");

//Cerrar una ventana (pestaña actual):
window.close();

//Control de ventanas:
const ventana = window.open("http://sitio.com");
ventana.close();

//LLamar al dialogo de impresión:
window.print();
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OBJETOS DEL BOM:
//---------------------------------------------------------------------------------------------------------------------------//
//LOCATION:
//Retorna un objeto Location (solo lectura) con información acerca de la ubicación actual del documento.
const objLocation = window.location;

//Propiedades:
const origen = objLocation.origin;      // Origen (http://sitio.com:3000)
const host = objLocation.host;          // Host (sitio.com:3000)
const hostname = objLocation.hostname;  // Hostname (sitio.com)
const href_actual = objLocation.href;   // URL actual (http://sitio.com:3000/pagina.html)
const protocolo = objLocation.protocol; // Protocolo (htto | https)
const puerto = objLocation.port;        // Puerto (80 | 443 | 3000)
const pathname = objLocation.pathname;  // Archivo actual (pagina.html)
const parametros = objLocation.search;  // Parametros GET

//Métodos:
objLocation.reload(); // Recargar página (F5)
objLocation.assing('http://sitio.com'); //Redireccion de sitio

//HISTORIAL:
const objHistorial = window.history;

//Propiedades:
objHistorial.length; //Cantidad de paginas visitadas en la pestaña: Cuantos pasos hacia atrás podría moverse en el navegador.

//Métodos:
objHistorial.back(3);     //Regresar X páginas hacia atrás en el historial.
objHistorial.forward(2);  //Avanzar X páginas hacia adelante en el historial.

//NAVEGADOR:
const objNavegador = window.navigator;

//Propiedades:
const idioma = objNavegador.language;           //es-ES
const plataforma = objNavegador.platform;       //Linux x86_64 | Win32
const user_agent = objNavegador.userAgent;      //Información de agente de usuario
const conexion = objNavegador.connection;       //Información de la conexión del usuario
const dispositivos = objNavegador.mediadevices; //Información de dispositivos del equipo
const resultado_booleano = objNavegador.online; //Retorna si se posee conectividad WAN o no.
const usb = objNavegador.usb;                   //Detectar dispositivos USB.
//---------------------------------------------------------------------------------------------------------------------------//
