//---------------------------------------------------------------------------------------------------------------------------//
// STRUCT:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un tipo de dato personalizado que nos permite entre otras cosas definir una estructura.
//---------------------------------------------------------------------------------------------------------------------------//
struct User {
    username: String,
    password: String
}

fn create_user(username: String, password: String) -> User {
    User {username, password}
}

fn main() {
    //Crear manualmente:
    let usuario = User{
        username: String::from("cpifano"),
        password: String::from("clave.123"),
    };

    //Crear a través de una función:
    let nuevo_usuario = create_user("cpifano", "clave.123");

    //Muestreo de datos:
    println!("Nombre de usuario: {}", usuario.username);
}
//---------------------------------------------------------------------------------------------------------------------------//
