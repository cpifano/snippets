//---------------------------------------------------------------------------------------------------------------------------//
// OPERACIONES SOBRE ARCHIVOS:
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPEN:
//---------------------------------------------------------------------------------------------------------------------------//
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

fn main() {
    //Crear path hacia el archivo:
    let path = Path::new("nombre_archivo.txt");

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (read-only);
    let mut file = match File::open(&path) {
        Err(why) => panic!("No se pudo abrir el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Leer el contenido del archivo en un string:
    let mut contenido = String::new();

    match file.read_to_string(&mut contenido) {
        Err(why) => panic!("No se pudo leer el archivo {}: {}", display, why),
        Ok(_) => print!("{} Contenido:\n{}", display, contenido),
    }

    // La variable 'file' donde es abierto el archivo es de scope local, por ende se cerrará al cierrre del bloque donde
    // fué definido.
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CREATE:
//---------------------------------------------------------------------------------------------------------------------------//
const CONTENIDO: &str = "Lorem ipsum dolor sit amet...";

use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

fn main() {
    //Crear path hacia el archivo:
    let path = Path::new("lorem_ipsum.txt");

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (write-only):
    let mut file = match File::create(&path) {
        Err(why) => panic!("No se pudo crear el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Escribir el contenido de la constante `CONTENIDO` como string en el archivo:
    match file.write_all(CONTENIDO.as_bytes()) {
        Err(why) => panic!("No se pudo escribir el archivo {}: {}", display, why),
        Ok(_) => println!("Escritura exitosa {}", display),
    }

    // En caso de que el archivo ya posea contenido de forma previa, en esta operación el contenido del mismo se perdería.
    // Este es un procedimiento de reescritura.
}
//---------------------------------------------------------------------------------------------------------------------------//
