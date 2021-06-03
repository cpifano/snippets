/*LARGO:-----------------------------------------------------------------------------------------------------------------------------*/
function Largo(Min, Max, IDtxt, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = $('#' + IDtxt).val();
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		$('#' + IDlblAviso).text('Vacío');
	} else if(IDtxtLargo >= Min && IDtxtLargo <= Max){
		$('#' + IDlblAviso).text('Correcto');
	} else{
		$('#' + IDlblAviso).text('Incorrecto');
	}
}

function Largo_Salir(Min, Max, IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = $('#' + IDtxt).val();
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		$('#' + IDlblAviso).text('Vacío');
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deberá contener un mínimo de " + Min + " y un máximo de " + Max + " caracteres."
		$('#' + IDpar).text(Leyenda);
	} else if(IDtxtLargo >= Min && IDtxtLargo <= Max){
		$('#' + IDlblAviso).text('Correcto');
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		$('#' + IDpar).text(Leyenda);
	} else{
		$('#' + IDlblAviso).text('Incorrecto');
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deberá contener un mínimo de " + Min + " y un máximo de " + Max + " caracteres."
		$('#' + IDpar).text(Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO NUMEROS:----------------------------------------------------------------------------------------------------------------------*/
function Solo_Numeros(Evento, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if (CodigoCaracter > 31 && (CodigoCaracter < 48 || CodigoCaracter > 57)){
		$('#' + IDlblAviso).text('Solo números');
		return false;
	} else{
		$('#' + IDlblAviso).text('Correcto');
		return true;
	}
}

function Solo_Numeros_Salir(IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = $('#' + IDtxt).val();
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		$('#' + IDlblAviso).text('Vacío');
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deberá contener solo caracteres numéricos y no puede estar vacío."
		$('#' + IDpar).text(Leyenda);
	} else {
		$('#' + IDlblAviso).text('Correcto');
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		$('#' + IDpar).text(Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS SIMPLE (SIN ESPACIOS):-------------------------------------------------------------------------------------------------*/
function Solo_Letras_SSE(Evento, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8 ){
		$('#' + IDlblAviso).text('Solo letras');
		return false;
	} else{
		$('#' + IDlblAviso).text('Correcto');
		return true;
	}
}

function Solo_Letras_SSE_Salir(IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = $('#' + IDtxt).val();
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		$('#' + IDlblAviso).text('Vacío');
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deberá contener solo caracteres alfabéticos, no se admiten ni tíldes ni espacios en blanco y no puede estar vacío."
		$('#' + IDpar).text(Leyenda);
	} else {
		$('#' + IDlblAviso).text('Correcto');
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		$('#' + IDpar).text(Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS COMPLEJO (CON ESPACIOS):-----------------------------------------------------------------------------------------------*/
function Solo_Letras_CCE(Evento, IDlblAviso){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8
		&& CodigoCaracter != 32 && CodigoCaracter != 241 && CodigoCaracter != 209 && CodigoCaracter != 225 && CodigoCaracter != 193
		&& CodigoCaracter != 233 && CodigoCaracter != 201 && CodigoCaracter != 237 && CodigoCaracter != 205 && CodigoCaracter != 243
		&& CodigoCaracter != 211 && CodigoCaracter != 250 && CodigoCaracter != 218){
		$('#' + IDlblAviso).text('Solo letras');
		return false;
	} else{
		$('#' + IDlblAviso).text('Correcto');
		return true;
	}
}

function Solo_Letras_CCE_Salir(IDtxt, IDpar, IDlblAviso){
	/*Acceder al contenido de un elemento por ID*/ 
	var IDtxtValor = $('#' + IDtxt).val();
	
	/*Extraer el largo*/
	var IDtxtLargo = IDtxtValor.length;
	
	/*Evaluar*/
	if(IDtxtLargo == ""){
		$('#' + IDlblAviso).text('Vacío');
		/*Escribir leyenda informativa*/
		var Leyenda = "El siguiente campo deberá contener caracteres alfabéticos, algunos caracteres especiales como tíldes, eñes, espacios y no puede ser vacío."
		$('#' + IDpar).text(Leyenda);
	} else {
		$('#' + IDlblAviso).text('Correcto');
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		$('#' + IDpar).text(Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/

/*SELECCION DE ELEMENTOS:------------------------------------------------------------------------------------------------------------*/
function Selecion_Elementos(ElementName, IDpar, IDlblAviso){
	
	/*Obtener un vector con los elementos de mismo nombre*/
	var Elementos = document.getElementsByName(ElementName);
	
	for (var i=0 ; i <= Elementos.length ; i++){
		if (Elementos[i].checked){
			Selecion_Elementos_Evaluar('V', IDpar, IDlblAviso);
			return;
		} else if (i == Elementos.length - 1) { 
			Selecion_Elementos_Evaluar('F', IDpar, IDlblAviso);
			return;
		}
	}
}

function Selecion_Elementos_Evaluar(CHK, IDpar, IDlblAviso){
	/*Evaluar*/
	if (CHK == "V"){
		$('#' + IDlblAviso).text('Correcto');
		/*Vaciar leyenda informativa*/
		var Leyenda = ""
		$('#' + IDpar).text(Leyenda);
	} else {
		$('#' + IDlblAviso).text('Incorrecto');
		/*Escribir leyenda informativa*/
		var Leyenda = "Deberá seleccionar por lo menos una de las opciones."
		$('#' + IDpar).text(Leyenda);
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/