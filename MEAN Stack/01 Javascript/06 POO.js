//---------------------------------------------------------------------------------------------------------------------------//
// PROTOTIPOS:
//---------------------------------------------------------------------------------------------------------------------------//
//Creación de un Objeto literal JS (__proto__:object):
const usuario = {
  username: 'cpifano',
  password: 'clave.123',
  saludar(){
    console.log(`Hola ${this.username}`);
  }
};

//Ejecutar método desde el objeto:
usuario.saludar();

//---------------------------------------------------------------------------------------------------------------------------//
//Crear un prototipo:
//Función Constructor (Genera un prototipo vacío).
function Usuario(username, password){
  //Atributos de mi función constructora:
  this.username = username;
  this.password = password;

  //Métodos:
  this.saludar = function(){
    return `Hola ${this.username}`;
  }
}

//Instanciar objeto:
const usuario = new Usuario('cpifano', 'clave.123');

//Ejecutar método desde un objeto:
usuario.saludar();

//---------------------------------------------------------------------------------------------------------------------------//
//Crear Métodos fuera de la función prototipo (Más eficiencia, menor consumo de carga):
//Para evitar duplicar la carga de métodos cada vez que se instancie un objeto.

//Crear un prototipo:
function Usuario(username, password){
  //Atributos de mi función constructora:
  this.username = username;
  this.password = password;
}

//Agregar métodos a la función constructor:
Usuario.prototype.saludar = function(){
    return `Hola ${this.username}`;
  }
}

//Instanciar objeto:
//En esta ocasión cuando se cree una instancia solo se asignarán los Atributos del prototipo.
//No se estará duplicando los métodos en cada instancia ya que los métodos solo estan asociados al prototipo padre (Usuario).
const usuario = new Usuario('cpifano', 'clave.123');

//Ejecutar método desde un objeto:
//Aún así estos se encuentran disponibles para su uso:
usuario.saludar();
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// HERENCIA PROTOTÍPICA:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear función prototipo extendida (Herencia):
function Alumno(username, password, course){
  //Asignar prototipo padre:
  this.super = Usuario;

  //Ejecutar Método Super:
  //Manda a llamar al constructor del elemento padre:
  this.super(username, password);

  //Atributo particular de prototipo Alumno:
  this.course = course;
}

//Instanciar Herencia:
//Hacer que Alumno sea una instancia de Usuarios para evitar duplicar la carga de métodos cada vez que se instancie un objeto de Alumno.
//Esto es poque se estaría incluyendo el método super en cada objeto instanciado de Alumno.
Alumno.prototype = new Usuario(); //Aquí se da la herencia realmente.
Alumno.prototype.constructor = Alumno; //Definir el constructor hacia el la funcion constructora de Alumno.

//Instanciar objeto:
const alumno = new Alumno('cpifano', 'clave.123', 'Javascript');
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CLASES Y HERENCIA:
//---------------------------------------------------------------------------------------------------------------------------//
// En JS las clases son convertidas a funciones prototípicas.
// Azúcar sintáctico: Solo existen para simplificar la escritura programática.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear una clase (Azúcar sintáctico):
class Usuario {
  //Método constructor:
  constructor (username, password){
    this.username = username;
    this.password = password;
  }
  //Al escribir en formato de clase JS Crear los métodos fuera de la función prototipo.
  saludar(){
    return `Hola ${this.username}`;
  }
}

//Herencia de clases:
class Alumno extends Usuario {
  //Método constructor:
  constructor (username, password, course){
    //Ejecutar Método Super:
    super(username, password); //Manda a llamar al constructor del elemento padre:

    //Atributo particular de prototipo Alumno:
    this.course = course;
  }
}

//Instanciar objetos:
const usuario = new Usuario('cpifano', 'clave.123');
const alumno = new Alumno('cpifano', 'clave.123', 'Javascript');

//Ejecutar métodos desde un objeto:
usuario.saludar();
alumno.saludar();
//---------------------------------------------------------------------------------------------------------------------------//
