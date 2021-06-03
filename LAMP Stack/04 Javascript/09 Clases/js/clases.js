/*CREACION DE UN OBJETO LITERAL:---------------------------------------------------------------*/
var Auto = {
	/*Atributos*/
	Color: "Rojo",

	/*Metodos*/
	Andar: function() {
	document.write("Run run runnn...");
	}
};

/*ACCEDER AL CONTENIDO DE UN ATRIBUTO*/
document.write("DATOS DEL OBJETO AUTO:</br>");
document.write("Color del auto: " + Auto.Color);

/*INVOCAR UN METODO DE MI OBJETO:*/
document.write("</br>Metodo del auto: ");
Auto.Andar();
/*---------------------------------------------------------------------------------------------*/


/*CREACION DE UNA CLASE:-----------------------------------------------------------------------*/
function Persona(Nom, Ape, Sex) {
	/*Atributos*/
	this.Nombre = Nom;
	this.Apellido = Ape;
	this.Sexo = Sex;
	this.Raza = 'Humano';
	
	/*Metodos*/
	this.Presentarse = function Presentarse(){
		document.write("Hola mi nombre es " + this.Nombre);
	};
}

/*INSTANCIAR UN NUEVO OBJETO*/
var MiPersona = new Persona('Juan', 'Gonzalez', 'Masculino');

/*ACCEDER AL CONTENIDO DE UN ATRIBUTO*/
document.write("</br></br></br>DATOS DEL OBJETO PERSONA:</br>");
document.write("Nombre: " + MiPersona.Nombre);
document.write("</br>Apellido: " + MiPersona.Apellido);
document.write("</br>Sexo: " + MiPersona.Sexo);
document.write("</br>Raza: " + MiPersona.Raza);

/*INVOCAR UN METODO DE MI OBJETO:*/
document.write("</br>Metodo de la persona: ");
MiPersona.Presentarse();
/*---------------------------------------------------------------------------------------------*/