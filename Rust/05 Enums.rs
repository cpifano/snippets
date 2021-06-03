//---------------------------------------------------------------------------------------------------------------------------//
// ENUMS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un tipo de dato personalizado que almacena diferentes variantes de opciones enumerables.
//---------------------------------------------------------------------------------------------------------------------------//
fn main(){
    //Crear Enum:
    enum Response {
        Success,
        Error(u32, String), //403, 404, 500 - Mensaje
    }

    //Contenido de respuesta es Error 403:
    let respuesta = Response::Error(501, String::from("No es posible completar la operación."));

    //Evaluar:
    match respuesta {
        Response::Success => println!("La peticion se realizo de forma satisfactoria."),
        Response::Error(403, _) => println!("Forbidden"),
        Response::Error(403, _) => println!("Not Found"),
        Response::Error(403, _) => println!("Internal server error"),
        Response::Error(_, mensaje) => println!("{}", mensaje),
        Response::Error(_, _) => println!("Error no contemplado.");
    }
}
//---------------------------------------------------------------------------------------------------------------------------//
