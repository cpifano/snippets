/*INTRODUCCION:-----------------------------------------------------------------------------------------*/
/*TIPOS DE NODOS:*/
/*
La especificación completa de DOM define 12 tipos de nodos, aunque las páginas XHTML habituales se pueden manipular manejando solamente cuatro o cinco tipos de nodos:

- Document: nodo raíz del que derivan todos los demás nodos del árbol.
- Element: representa cada una de las etiquetas HTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.
- Attr: se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.
- Text: nodo que contiene el texto encerrado por una etiqueta HTML.
- Comment: representa los comentarios incluidos en la página HTML.

Los otros tipos de nodos existentes que no se van a considerar son:
DocumentType, CDataSection, DocumentFragment, Entity, EntityReference, ProcessingInstruction y Notation.
*/
/*------------------------------------------------------------------------------------------------------*/

/*WINDOW ONLOAD:----------------------------------------------------------------------------------------*/
window.onload = function() {
	
	/*OBTENER ELEMENTOS DEL DOCUMENTO:------------------------------------------------------------------*/
	/*POR EL NOMBRE DE LA ETIQUETA:*/
	var Parrafos = document.getElementsByTagName("p");

	/*Obtener el primer parrafo del documento:*/
	var PrimerParrafo = Parrafos[0];

	/*Recorrer todos los Parrafos:*/
	var Contador = 0;

	for(var i=0; i<Parrafos.length; i++) {
		Contador++;
	}
	
	/*POR EL NOMBRE DEL ELEMENTO:*/
	var ParrafoParticular = document.getElementsByName("Particular");
	
	/*POR EL ID DEL ELEMENTO:*/
	var ParrafoID = document.getElementById("ID");
	/*--------------------------------------------------------------------------------------------------*/


	/*CREACION  E INSERCION DE NODOS:-------------------------------------------------------------------*/
	/*Crear elemento segun la etiqueta*/
	var MiParrafo01 = document.createElement("p");
	
	/*Crear un nodo de texto con el contenido del parrafo*/
	var Contenido01 = document.createTextNode("Cantidad de parrafos antes de modificar el DOM: " + Contador);

	/*appendChild*/
	/*NodoPadre.appendChild(NodoHijo);*/
	/*Permite añadir un nodo como hijo de otro nodo.*/
	
	/*Agregar un nodo con el contenido al parrafo*/
	MiParrafo01.appendChild(Contenido01);
	
	/*Agregarlo al final del documeto con appendChild*/
	document.body.appendChild(MiParrafo01);
	
	
	/*Agregar con insertBefore*/
	/*NodoPadre.insertBefore(NodoHijo,NodoDeReferencia);*/
	/*Nos permite elegir un nodo del documento e incluir otro antes que él.*/
	
	var MiParrafo02 = document.createElement("p");
	var Contenido02 = document.createTextNode("Estoy antes que el contador.");
	
	MiParrafo02.appendChild(Contenido02);
	
	document.body.insertBefore(MiParrafo02, MiParrafo01);
	/*--------------------------------------------------------------------------------------------------*/
	
	
	/*REEMPLAZAR NODOS:---------------------------------------------------------------------------------*/
	/*Seleccionar el elemento a reemplazar*/
	var ParrafoViejo = document.getElementById("Reemplazar");
	
	/*Crear el nuevo elemento y su contenido*/
	var NuevoParrafo = document.createElement("p");
	var NuevoContenido = document.createTextNode("El contenido de este parrafo fue reemplazado");
	
	NuevoParrafo.appendChild(NuevoContenido);
	
	/*Reemplazar el elemento con replaceChild*/
	document.body.replaceChild(NuevoParrafo, ParrafoViejo)
	/*--------------------------------------------------------------------------------------------------*/
	
	
	/*ELIMINACION DE NODOS:-----------------------------------------------------------------------------*/
	/*Seleccionar el elemento a eliminar*/
	var ParrafoEliminar = document.getElementById("Eliminar");
	
	/*Eliminar elemento con removeChild*/
	document.body.removeChild(ParrafoEliminar);
	/*--------------------------------------------------------------------------------------------------*/
	
	
	/*INSERTAR UN NUEVO NODO DENTRO DENTRO DE OTRO NODO:------------------------------------------------*/
	/*Crear el nodo hijo*/
	var NodoHijo = document.createTextNode(" - Este contenido fue insertado en el Parrafo con ID");
	
	/*Determinar punto de insercion*/
	document.getElementById("ID").appendChild(NodoHijo);
	/*--------------------------------------------------------------------------------------------------*/
	
	
	/*AÑADIR UN EVENTO A UN ELEMENTO:-------------------------------------------------------------------*/
	/*Obtener el elemento por ID*/
	var Elemento01 = document.getElementById("IDbtnBoton01");
	
	/*Invocar funcion Añadir Evento (Primer Opcion)*/
	Añadir_Evento_01(Elemento01, "click", Funcion_Mensaje);
	
	/*Funcion Añadir Evento (Primer Opcion)*/
	function Añadir_Evento_01(Elemento, Evento, Funcion){
		if (Elemento.addEventListener){
			/*DOM en W3C*/
			/*Elemento.addEventListener(event,Funcion,Captura);*/
			Elemento.addEventListener(Evento, Funcion, false);
		} else if (Elemento.attachEvent){
			/*DOM en Internet Explorer*/
			/*Elemento.attachEvent("on" + event, Funcion);*/
			Elemento.attachEvent('on' + Evento, Funcion);
			return false;
		}
	}
	
	/*Obtener el elemento por ID*/
	var Elemento02 = document.getElementById("IDbtnBoton02");
	
	/*Invocar funcion Añadir Evento (Segunda Opcion)*/
	Añadir_Evento_02(Elemento02, "onclick", "Saludo('Mundo');");
	
	/*Funcion Añadir Evento (Segunda Opcion)*/
	function Añadir_Evento_02(Elemento, Evento, Funcion){
		var Prefijo = "Elemento." + Evento + " = function(){ ";
		var Sufijo = "};";
		var Expresion = Prefijo + Funcion + Sufijo;
		
		/*Evaluar Expresion*/
		eval(Expresion);
	}
	
	/*Funcion Mensaje (Sin Parametros)*/
	function Funcion_Mensaje(){
		alert("Este evento fue agregado dinamicamente por DOM");
	}
	
	/*Funcion Saludo (Con Parametros)*/
	function Saludo (Mensaje){
		alert("Hola " + Mensaje);
	}
	/*--------------------------------------------------------------------------------------------------*/
	
	/*FOCUS:--------------------------------------------------------------------------------------------*/
	/*Esta funcion nos permitirá pasar el foco a un elemento cualquiera de un formulario*/
	document.getElementById("IDbtnBoton02").focus();
	/*--------------------------------------------------------------------------------------------------*/
}
/*------------------------------------------------------------------------------------------------------*/