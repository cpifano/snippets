//---------------------------------------------------------------------------------------------------------------------------//
// MÉTODOS ESTÁTICOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Son aquellos que pueden ser llamados sin necesidad de instanciar la clase a la que pertenecen.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear una clase:
class Usuario {
  //Crear método estático:
  static info(){
    console.log("La clase Usuario tiene la finalidad..");
  }

  //Atributo sin valor al momento de instanciar objeto:
  this.nombre = null;

  //Método GET:
  get getNombre(){
    return this.nombre;
  }

  //Método SET:
  set setNombre(nombre){
    this.nombre = nombre;
  }
}

//Ejecutar método estático:
Usuario.info();

//Instanciar objeto:
const usuario = new Usuario();

//Utilizar método SET (Cómo atributo):
usuario.setNombre = "Camilo";

//Utilizar método GET (Cómo atributo):
console.log("Nombre usuario: " + usuario.getNombre);
//---------------------------------------------------------------------------------------------------------------------------//
