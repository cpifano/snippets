//---------------------------------------------------------------------------------------------------------------------------//
// CRATES:
//---------------------------------------------------------------------------------------------------------------------------//
// Un Crate es (una caja), una unidad de compilación en Rust.
// Los CRATES nos permiten la creación de librerías indepentdientes que puedan ser alojadas en otros proyecctos de Rust.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// CREAR UNA LIBRERÍA:
//---------------------------------------------------------------------------------------------------------------------------//
pub fn funcion_publica() {
    println!("Ejecución de funcion_publica");
}

fn funcion_privada() {
    println!("Ejecución de funcion_privada");
}

pub fn funcion_acceso_indirecto() {
    print!("Ejecución de funcion_acceso_indirecto");

    funcion_privada();
}

// DESDE LA CONSOLA:
// $ rustc --crate-type=lib rary.rs
// $ ls lib*
// library.rlib
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// USAR LA LIBRERÍA:
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    rary::funcion_publica();

    rary::private_function(); // Error! `funcion_privada` is private

    rary::funcion_acceso_indirecto();
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// INSTALAR Y USAR CRATES:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar un crate alojado en crates.io:
cargo install nombre_crate

//ASOCIAR UN CRATE DESDE EL ARCHIVO DEL PROYECTO (CARGO.TOML):
[dependencies]
base64 = "0.13.0"
tokio = { version = "0.2", features = ["macros"]}
warp = "0.2"

//Ejemplo de uso:
extern crate base64;

fn main() {
    let content = b"Hola mundo"; //Number literals: Byte (u8 only) - b'A'

    let encoded = base64::encode(content);
    let decoded = base64::decode(&encoded);

    println!("{}", encoded);
    println!("{:?}", decoded);
}
//---------------------------------------------------------------------------------------------------------------------------//
