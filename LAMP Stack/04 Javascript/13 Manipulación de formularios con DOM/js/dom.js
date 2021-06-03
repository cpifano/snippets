/*FUNCION INGRESO:--------------------------------------------------------------------------------------*/
function Ingreso() {

	/*Acceder a un formulario por su ID*/
	var frmPrincipalxID = document.getElementById("IDPrincipal");

	/*Acceder a un formulario por su nombre*/
	var frmPrincipal = document.Principal;

	/*Acceder a un elemento incluido en un formulario*/
	var txtNombre = document.Principal.Nombre;
	
	/*Acceder al contenido de un elemento por ID*/ 
	var txtNombreValorxID = document.getElementById("IDNombre").value;
	

	/*REEMPLAZAR NODOS:---------------------------------------------------------------------------------*/
	/*Seleccionar el elemento a reemplazar*/
	var ParrafoViejo = document.getElementById("Muestreo");
	
	/*Crear el nuevo elemento y su contenido*/
	var NuevoParrafo = document.createElement("p");
	var NuevoContenido = document.createTextNode("Ingreso: " + txtNombreValorxID);
	
	/*Determinar ID del nuevo elemento*/
	NuevoParrafo.id = "Muestreo";
	
	NuevoParrafo.appendChild(NuevoContenido);
	
	/*Reemplazar el elemento con replaceChild*/
	document.body.replaceChild(NuevoParrafo, ParrafoViejo)
	/*--------------------------------------------------------------------------------------------------*/
}
/*------------------------------------------------------------------------------------------------------*/

/*WINDOW ONLOAD:----------------------------------------------------------------------------------------*/
window.onload = function(){
	/*Generar intervalo cada un octavo de segundo*/
	setInterval(Ingreso, 125);
}
/*------------------------------------------------------------------------------------------------------*/


