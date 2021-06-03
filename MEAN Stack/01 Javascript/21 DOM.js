//---------------------------------------------------------------------------------------------------------------------------//
// DOM: Document Object Model
//---------------------------------------------------------------------------------------------------------------------------//
// Es la WebAPI que nos permite manejar HTML a través de JS.
//---------------------------------------------------------------------------------------------------------------------------//
//Extraer elementos HTML del sitio:
//Se asume que la ejecución esta dada dentro del scope de window.
const $titulo = document.title;
const $cabecera = document.head;
const $documento_completo = document.documentElement;
const $cuerpo = document.body;
const $codificación_de_caracteres = document.charset;
const $enlaces = document.links; //Retorna un HTMLCollection (Elemento iterable, NO es una array, no posee todos los métodos de uno), con todos los enlaces del sitio.
const $imagenes = document.images;
const $formularios = document.forms;
const $estilos = document.styleSheets; //Retornará todos los CSS enlazados al sitio.
const $scripts = document.scripts; //Retornará todos los scripts JS enlazados al sitio.

//Mapear Selección (controlar con un trigger):
const $texto_seleccionado = document.getSelection().toString();

//Escribir en el documento (al final):
document.write("Hola mundo!");
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// SELECTORES:
//---------------------------------------------------------------------------------------------------------------------------//
//Selección de elementos (Originarios):
const $div_multi = document.getElementsByTagName('div'); //Deprecado y reemplazado por "querySelector".
const $clase_multi = document.getElementsByClassName('clase'); //Deprecado y reemplazado "querySelector".
const $nombre_multi = document.getElementsByName('nombre'); //Deprecado y reemplazado "querySelector"
const $id = document.getElementById('id'); //Tiene mejor performance que (querySelector).

//Selección simple (querySelector):
//Recibe un selector válido y solo trae la primer aparición.
const $div = document.querySelector('div');
const $clase = document.querySelector('.clase');
const $id = document.querySelector('#id');

//Selección múltiple (querySelectorAll):
//Recibe un selector válido y trae todos los elementos que cumplan con la coincidencia en una NodeList (Elemento iterable).
const $div_multi = document.querySelectorAll('div');
const $clase_multi = document.querySelectorAll('.clase');
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ATRIBUTOS HTML:
//---------------------------------------------------------------------------------------------------------------------------//
//Selección de Atributos (getAttribute):
// <a href="index.html">Enlace</a>
const atributo_comun = document.querySelector('a').getAttribute('href');

//Método setter de atributos (setAttribute):
document.querySelector('a').setAttribute('href', 'nuevo_valor.html');

//Validar existencia de atributo (hasAttribute):
const resultado_booleano = document.querySelector('a').hasAttribute('href');

//Casos particulares de clases:
const $contenido_clases = document.querySelector('a').className; //Retorna un string con el contenido del atributo class.
const $contenido_clases_iterable = document.querySelector('a').classList; //Retorna un elemento iterable con las clases del elemento.

//Agregar y quitar una clase (Setters):
document.querySelector('a').classList.add('nombre_clase');
document.querySelector('a').classList.remove('nombre_clase');
document.querySelector('a').classList.toogle('nombre_clase'); //Interruptor: si existe la quita sino la agrega.
document.querySelector('a').classList.replace('clase_a_reemplazar', 'nombre_clase_nueva');

//Validar existencia de clase:
const resultado_booleano = document.querySelector('a').classList.contains('nombre_clase');
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CSS:
//---------------------------------------------------------------------------------------------------------------------------//
//Selección CSS (Para acceder a propiedades existentes):
const propiedades_css = document.querySelector('a').getAttribute('style');

//Seleccionar una propiedad en particular:
const propiedad_bgc_css = document.querySelector('a').style.backgroundColor;

//Método setter para un propiedad CSS:
document.querySelector('a').style.setProperty('color', '#FFFFFF');

//O utilizar método setter originario:
document.querySelector('a').style.color('#FFFFFF');

//Selección de Variables CSS:
const $html = document.documentElement;
let contenido_variable_CSS = getComputedStyle($html).getPropertyValue('--nombre-variable-css');

//Método setter para Varialbes CSS:
$html.style.setProperty("--nombre-variable-css", "#FFFFFF"); //Actualiza solo el HTML
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TEXTO & HTML:
//---------------------------------------------------------------------------------------------------------------------------//
const $elemento = document.getElementById('id');

//Insertar solo texto:
$elemento.textContent = 'Texto para agregar...';

//Insertar texto HTML:
$elemento.innerHTML = '<br/>Texto HTML.';  //Dentro: Reemplaza el contenido HTML del elemento.
$elemento.outerHTML = '<br/>Texto HTML.';  //Fuera: Reemplaza el elemento HTML.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DOM TRAVERSING (NODOS TIPO ELEMENTOS):
//---------------------------------------------------------------------------------------------------------------------------//
//Recorrer los nodos de tipo elemento (Para evitar comentarios y saltos de lineas):
const $hijos = document.querySelector('ul').children; //<li>
const $padre = document.querySelector('li').parentElement; //<ul>
const $primer_hijo = document.querySelector('ul').firstElementChild; //<li> Solo el primero.
const $ultimo_hijo = document.querySelector('ul').lastElementChild; //<li> Solo el último.

//Siblings:
const $elemento_previo = document.querySelector('ul').previousElementSibling; //Elemento previo.
const $siguiente_previo = document.querySelector('ul').nextElementSibling; //Elemento siguiente.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MANIPULACIÓN DE NODOS (TIPO ELEMENTOS) [MÉTODOS ORIGINARIOS]:
//---------------------------------------------------------------------------------------------------------------------------//
//AGREGAR NODO:
//Crear un elemento HTML:
const $parrafo = document.createElement("p");

//Crear un nodo de texto:
const contenido_parrafo = document.createTextNode("Hola mundo!");

//Agregar el contenido (nodo de texto) al elemento HTML:
$parrafo.appendChild(contenido_parrafo);

//Agregar el elemento HTML al final dentro del body:
document.body.appendChild($parrafo);

//O seleccionar un elemento de destino ya existente en el DOM:
const $destino = document.querySelector('div');
$destino.appendChild($parrafo);

//Insertar antes de un elemento en particular:
$destino.insertBefore($nuevo_parrafo, $destino.firstElementChild); //Inserta en este caso en la primer posición.

//REEMPLAZAR NODO:
document.body.replaceChild($nuevo_elemento, $elemento_a_reemplazar)

//ELIMINAR NODO:
document.body.removeChild($elemento_a_eliminar);

//FOCUS:
document.getElementById("id").focus(); //Establecer el foco en un elemento.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MANIPULACIÓN DE NODOS [MÉTODOS ACTUALES]:
//---------------------------------------------------------------------------------------------------------------------------//
//Metodos para agregar nodos:
insertAdjacentElement(posicion, elemento); //Añade un nodo tipo elemento.
insertAdjacentHTML(posicion, html); //Añade contenido HTML.
insertAdjacentText(posicion, texto); //Añade contenido de texto.

//Opciones de posicionamiento:
beforebegin   //elemento_anterior
afterbegin    //primer_hijo
beforeend     //ultimo_hijo
afterend      //elemento_siguiente

//AGREGAR NODO:
const $destino = document.querySelector('div');
const $parrafo = document.createElement("p");
$parrafo.insertAdjacentHTML('beforeend', 'Hola mundo<br/>');
$destino.insertAdjacentElement('beforeend', $parrafo);

//METODOS SIMPLIFICADOS:
//Agregar como elemento anterior (beforebegin):
$destino.before($parrafo);

//Agregar como primer hijo (afterbegin):
$destino.prepend($parrafo);

//Agregar como ultimo hijo (beforeend):
$destino.append($parrafo);

//Agregar como elemento siguiente (afterend):
$destino.after($parrafo);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// EVENTOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Todas las funciones que sean ejecutadas por un evento recibirán como parametro al evento en si (event) como parametro de
// la misma.
//---------------------------------------------------------------------------------------------------------------------------//
//EVENTO CON ATRIBUTO HTML:
<button onclick="nombre_funcion();">Nombe botón</button>

//Obtener elemento HTML por ID:
const $boton = document.getElementById('id');

//EVENTO CON MANEJADOR SEMÁNTICO (NO PUEDE RECIBIR PARAMETROS):
$boton.onclick = nombre_funcion; //Sin paréntesis

//También se puede definir la funcion asociada al evento directamente:
//Los manejadores semánticos solo pueden tener una función asociada (event handler), si le asigno más de una quedará solo la última.
$boton.onclick = (e) => { /*...*/ }

//EVENTO CON MANEJADOR MULTIPLE (NO PUEDE RECIBIR PARAMETROS):
//En este caso podemos asignar varias funciones a un mismo evento.
$boton.addEventListener('click', nombre_funcion);
$boton.addEventListener('click', (e) => { /*...*/});

//EVENTOS CON PARAMETROS:
$boton.addEventListener('click', (e) => { nombre_funcion (parametros); });

//REMOVER EVENTOS CON MANEJADOR MULTIPLE:
//Nos solicita la funcion manejadora (es necesario que la función manejadora sea declarada).
$boton.removeEventListener('click', nombre_funcion);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DOCUMENT READY:
//---------------------------------------------------------------------------------------------------------------------------//
// Se ejecutará cuando el documento HTML ya haya sido parseado y ejecutado.
//---------------------------------------------------------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', (e) => { /* Document Ready */ });
//---------------------------------------------------------------------------------------------------------------------------//
