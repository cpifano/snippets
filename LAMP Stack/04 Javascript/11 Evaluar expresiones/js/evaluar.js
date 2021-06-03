/*Funcion Saludo*/
function Saludo(Mensaje){
	alert("Hola " + Mensaje);
}

/*Cargar funcion en una cadena*/
var String = "Saludo('Mundo');";

/*Invocar funcion*/	
eval(String);