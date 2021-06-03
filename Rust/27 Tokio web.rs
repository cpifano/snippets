//---------------------------------------------------------------------------------------------------------------------------//
// TOKIO - WEB SERVER:
//---------------------------------------------------------------------------------------------------------------------------//
// Dependencias:
// tokio = { version = "0.2", features = ["macros"]}
// warp = "0.2"
//---------------------------------------------------------------------------------------------------------------------------//
//Crear servidor web:
use warp::Filter;

//Nuestro main va a correr de forma asíncrona (CRATE tokio):
#[tokio::main]
async fn main() {
    let filter = warp::path!("directorio" / String)
    .map(|palabra| format!("Hola {}", palabra));

    println!("Se ha ingresado al servidor web");

    warp::serve(filter)
    .run(([127, 0, 0, 1], 8080))
    .await; //Para que espere que el servidor se ejecute.
}
//---------------------------------------------------------------------------------------------------------------------------//
