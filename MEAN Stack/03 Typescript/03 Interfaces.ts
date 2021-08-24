//---------------------------------------------------------------------------------------------------------------------------//
// INTERFACES:
//---------------------------------------------------------------------------------------------------------------------------//
// Las interfaces establecen una estructura obligatoria que deberá respetarse.
// Son un mecanismo de la programación orientada a objetos que trata de suplir la carencia de herencia
// múltiple. La diferencia de las clases que extiendes con respecto a las interfaces es que las interfaces no contienen
// implementación de sus métodos, por lo que la clase que implementa una interfaz debe escribir el código de todos los
// métodos que contiene.
// Por este motivo, se dice que las interfaces son como un contrato, en el que se especifica las cosas que debe contener
// una clase para que pueda implementar una interfaz o cumplir el contrato declarado por esa interfaz.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// IMPLEMENTACIÓN DE INTERFACES:
//---------------------------------------------------------------------------------------------------------------------------//
interface ISumergible {
  tiempo_max_sumergido: number;
  profundidad_max: number;

  repeler_agua(): void;
}

//Implementación (Extender herencia de tipo):
class reloj_sumergible implements ISumergible {
  tiempo_max_sumergido = 1;
  profundidad_max = 10;

  repeler_agua() {
    console.log('El agua me resbala');
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPERADOR DE INTERSECCIÓN (&):
//---------------------------------------------------------------------------------------------------------------------------//
// El operador de intersección nos perite la union de tipos de datos.
// Para el caso de variables o constantes de un valór único no tiene una implementación real ya que no podemos unir un tipo
// de dato y que sea ambos a la vez (Ej: number y string). En este caso nos infiere que el tipo es never y carecerá de
// utilidad. Pero el operador de intersección presenta gran utilidad en la definicion de interfaces.
//---------------------------------------------------------------------------------------------------------------------------//
interface IUsuario {
  username: string,
  status: boolean
}

interface IAlumno {
  id: number
}

let alumno: IUsuario & IAlumno = {
  username: 'cpifano',
  status: true,
  id: 1001
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ITERFACES PARA ESTABLECER TIPOS DE DATOS NO COMPLEJOS:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear tipo de dato:
type TD_tipo_moneda = 'U$S' | '$UY'; //Admite solo estos dos valores (| OR).

interface IMoneda{
    valor: number;
    tipo: TD_tipo_moneda;
}

let precio: IMoneda;
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// UTILIZACION EN FUNCIONES:
//---------------------------------------------------------------------------------------------------------------------------//
//Definir interface:
interface IPendientes {
    titulo: string;
    texto: string;
    realizado: boolean;
}

//Definir funcion y hacer uso de mi interface:
function ver_pendientes(obj_pendientes: IPendientes): void{
    if(obj_pendientes.realizado == false){
        console.log(obj_pendientes.titulo + ': ' + obj_pendientes.texto);
    }
}

//Ejecutar mi funcion:
ver_pendientes({
    titulo: 'Limpieza',
    texto: 'Lavar la cocina',
    realizado: false
});

//UTILIZACIÓN PARA DEFINIR TIPO DE OBJETO BASE:
let lista_pendientes:IPendientes;
//---------------------------------------------------------------------------------------------------------------------------//
