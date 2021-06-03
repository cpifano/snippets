//---------------------------------------------------------------------------------------------------------------------------//
// CLOSURES:
//---------------------------------------------------------------------------------------------------------------------------//
// Son funciones anónimas.
// Nos permiten gran facilidad a la hora de definir una función para un uso particular, por ejemplo un callback.
// A diferencia de las funciones los Closures utilizan pipes en lugar de los parentesis para definir los parametros de
// entrada ||.
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    //Crear un Closure:
    let valor_retorno = || { i + 1 }

    //Definir el tipo del retorno es opcional
    let valor_retorno = || -> i32 { i + 1 }

    //Si es una sola linea se pueden evitar las llaves:
    let valor_retorno = || i + 1 ;

    //En caso de que el Closure sea asíncrono:
    let valor_retorno = || async {
        //...//
    }
}
//---------------------------------------------------------------------------------------------------------------------------//
