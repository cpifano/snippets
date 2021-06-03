//---------------------------------------------------------------------------------------------------------------------------//
// PATH:
//---------------------------------------------------------------------------------------------------------------------------//
// La estructura Path representa las rutas de los archivos en el sistema de archivos subyacente.
// Hay dos tipos de (Sistemas tipo UNIX y Windows).
// El preludio exporta la variante de ruta específica de la plataforma adecuada.
//---------------------------------------------------------------------------------------------------------------------------//
use std::path::Path;

fn main() {
    //Crear una ruta (Path) a partir de un str (&static str):
    let path = Path::new(".");

    //El método display devuelve una estructura:
    let _display = path.display();

    //join: fusiona una ruta con un contenedor de bytes utilizando el separador
    //específico del sistema operativo y devuelve la nueva ruta:
    let os_path = path.join("a").join("b");

    //Convertir el Path en un String:
    match os_path.to_str() {
        None => panic!("La ruta no posee una secuencia UTF-8 válida."),
        Some(string_path) => println!("La ruta es: {}", string_path),
    }
}
//---------------------------------------------------------------------------------------------------------------------------//
