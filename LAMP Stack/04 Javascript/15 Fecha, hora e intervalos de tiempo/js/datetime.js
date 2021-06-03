function Reloj() {
	/*EXTRAER FECHA Y HORA:-----------------------------------------------------------------------------*/
	/*Extraer fecha y hora del equipo cliente con la funcion Date() de javascript*/
	var FechaHora = new Date();
	
	/*Extraer los datos de la fecha por separado:*/
	var S = FechaHora.getDay();
	var DD = FechaHora.getDate();
	var MM = FechaHora.getMonth() + 1; /*Mes se cuenta de 0 a 11*/
	var AAAA = FechaHora.getFullYear();
	
	/*Extraer los datos de la hora por separado:*/
	var Hora = FechaHora.getHours();
	var Minuto = FechaHora.getMinutes();
	var Segundo = FechaHora.getSeconds();
	/*--------------------------------------------------------------------------------------------------*/
	
	/*ASOCIAR DIA DE LA SEMANA:-------------------------------------------------------------------------*/
	var Semana = new Array(7);
	
	Semana[0]="Domingo";
	Semana[1]="Lunes";
	Semana[2]="Martes";
	Semana[3]="Miércoles";
	Semana[4]="Jueves";
	Semana[5]="Viernes";
	Semana[6]="Sábado";
	/*--------------------------------------------------------------------------------------------------*/
	
	/*ASOCIAR NOMBRE DEL MES:---------------------------------------------------------------------------*/
	var Mes = new Array (12);
	
	Mes[1]="Enero";
	Mes[2]="Febrero";
	Mes[3]="Marzo";
	Mes[4]="Abril";
	Mes[5]="Mayo";
	Mes[6]="Junio";
	Mes[7]="Julio";
	Mes[8]="Agosto";
	Mes[9]="Septiembre";
	Mes[10]="Octubre";
	Mes[11]="Noviembre";
	Mes[12]="Diciembre";
	/*--------------------------------------------------------------------------------------------------*/
	
	/*AGREGAR CEROS PARA MANTENER EL FORMATO HH:MM:SS:--------------------------------------------------*/
	if(Hora < 10){
		Hora = '0' + Hora;
	}
	
	if(Minuto < 10){
		Minuto = '0' + Minuto;
	}
	
	if(Segundo < 10){
		Segundo = '0' + Segundo;
	}
	/*--------------------------------------------------------------------------------------------------*/
	
	/*INSERTAR CONTENIDO EN UN HTML ELEMENTO POR ID*/
	document.getElementById("FechaHora").innerHTML = "FORMATO ORIGINAL:<br/>" + FechaHora;
	document.getElementById("Fecha").innerHTML = "FECHA:<br/>Dia de la semana: "+ Semana[S] + "<br/>Nombre del mes: " + Mes[MM] + "<br/>" + DD + "/" + MM + "/" + AAAA;
	document.getElementById("Hora").innerHTML = "HORA:<br/>" + Hora + ':' + Minuto + ':' + Segundo;
}

/*EJECUTAR LA FUNCION RELOJ CADA UN SEGUNDO:------------------------------------------------------------*/
/*Funciones de tiempo:

setTimeout(NombreFuncion, Milisegundos);
setInterval(NombreFuncion, Milisegundos);

Estas dos funciones permiten ejecutar una función pasado un cierto intervalo de tiempo.
La única diferencia entre ellas es que "setInterval" se ejecutará una y otra vez en intervalos de 
x Milisegundos, en cambio, setTimeout se ejecutará una sola vez pasados x Milisegundos.
*/

window.onload = function(){
	setInterval(Reloj, 1000);
}
/*------------------------------------------------------------------------------------------------------*/