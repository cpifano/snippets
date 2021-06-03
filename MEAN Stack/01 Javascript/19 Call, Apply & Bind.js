//---------------------------------------------------------------------------------------------------------------------------//
// MÉTODOS CALL, APPLY & BIND:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear una función:
function saludar(parametro){
  console.log("Hola " + this.nombre + ", " + parametro);
}

//Crear objeto literal:
const objUsuario = {
  nombre: 'Camilo',

  //Método del objeto:
  despedirse: function(){
    console.log("Chau " + this.nombre);
  }
};

//Definir parametro:
let parametro = "¿Cómo estás?";

//CALL:
//Ejecutar función con método call y pasar como parametro cual será el contexto de this:
saludar.call(objUsuario, parametro);

//APPLY:
//Funciona de la misma forma que el método call pero a la hora de pasar parametros lo hace desde un array.
saludar.apply(objUsuario, [parametro]);

//BIND:
//Crear otro objeto:
const objUsuarioDos = {
  nombre: 'Lorenzo',

  //Método Bind:
  //Determinar el contexto local para la ejecución del método.
  despedirse: objUsuario.despedirse.bind(this);
};
//---------------------------------------------------------------------------------------------------------------------------//
