/*ESTRUCTURAS DE CONTROL:*/
		
/*SELECCION SIMPLE:*/
/*If:*/
if (Condicion){
	Sentencias_if;
}

/*Else:*/
if (Condicion){
	Sentencias_if;
} else {
	Sentencias_else;
}

/*Else If:*/
if (Condicion 01){
	Sentencias_if;
} else if (Condicion 02) {
	Sentencias_else_if;
} else {
	Sentencias_else;
}

/*SELECION MULTIPLE:*/
/*Switch:*/
/*Break es una estructura necesaria que escapa de las
estructuras de control iterantes.*/
switch ($Expresion){
	case 0:
		Sentencias;
		break;
	case 1:
		Sentencias;
		break;
	default:
		Sentencias;
}

/*En caso de evaluar Cadenas con Numeros:*/
switch ($Expresion){
	case "0":
		Sentencias;
		break;
	case "1":
		Sentencias;
		break;
	case "Palabra":
		Sentencias;
		break;
	default:
		Sentencias;
}

/*ITERACION:*/
/*While (Control previo):*/
while (Expresion) {
	Sentencias;
}

/*Do While (Control posterior):*/
do {
	Sentencias;
} while (Expresion);

/*For (Subrango):*/
for (i=0; i<=10; i++){
	Sentencias;
}

/*For Each (Recorre un vector hasta NULL):*/
var Vector = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (ValorActual in Vector){
	document.write("</br>Valor actual" + ValorActual);
}
	
/*Continue:*/
/*Continue es otra estructura de corte como break
la saltar el resto de las sentencias de una 
estructura de bucle y continuar la ejecucion.*/
while (Expresion){
	Sentencias;
	if (Condicion){
		continue;
	}
	Sentencias;
}