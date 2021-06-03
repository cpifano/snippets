//---------------------------------------------------------------------------------------------------------------------------//
// ACTIX WEB:
//---------------------------------------------------------------------------------------------------------------------------//
// [dependencies]
// actix-web = "3"
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// HOLA MUNDO:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar crate actix_web:
use actix_web::{web, App, HttpRequest, HttpServer, Responder};

async fn saludo(req: HttpRequest) -> impl Responder {
    //Si no obtiene valor GET 'name' establecerá Mundo como valor (unwrap_or):
    let name = req.match_info().get("name").unwrap_or("Mundo");

    //Retornar impl:
    format!("Hola {}!", &name)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting HTTP server");

    //Crear HTTP Server:
    HttpServer::new(|| {
        //Actix va inspeccionar la cantidad de CPUs con las que dispone y correra la app en cuantos cores disponga.
        //Es decir, creará un thread (hilo), por cada core con el que disponga.
        println!("Starting thread");

        App::new()
            //Definimos rutas hacia un métodos GET:
            .route("/", web::get().to(saludo))
            .route("/{name}", web::get().to(saludo))
    })
    .bind(("127.0.0.1", 8080))?
    //En caso de que no querramos que Actix determine cuantos Threads creará podemos definirlo manualmente con workers:
    .workers(3)
    .run()
    .await
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DEFINICIÓN Y USO DE SERVICIOS:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar crate actix_web:
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn saludo_index() -> impl Responder {
    HttpResponse::Ok().body("Hola mundo!")
}

#[post("/post-receiver")]
async fn post_receiver(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn saludo_route() -> impl Responder {
    HttpResponse::Ok().body("Saludo desde ruta saludar!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(saludo_index)
            .service(post_receiver)
            .route("/saludar", web::get().to(saludo_route))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
//---------------------------------------------------------------------------------------------------------------------------//
