//---------------------------------------------------------------------------------------------------------------------------//
// BYTES:
//---------------------------------------------------------------------------------------------------------------------------//
//Read Bytes:
use std::io::prelude::*;
use std::path::Path;
use std::fs::File;

fn main(){
    //Crear path hacia el archivo:
    let path = Path::new("log.txt");

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (read-only);
    let file = match File::open(&path) {
        Err(why) => panic!("No se pudo abrir el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Obtener largo de archivo:
    let file_len = file.metadata().unwrap().len();

    //Muestreo de información DEBUG:
    let line = "|------------------------------------|";
    println!("\n{}", line);
    println!("| LARGO TOTAL DEL ARCHIVO: {: <10}|", file_len);
    println!("{}", line);

    //Inicializar contador:
    let mut byte_count:i32 = 0;

    //Recorrer de a Bytes:
    for byte in file.bytes() {
        //Incrementar contador:
        byte_count = byte_count + 1;

        //Obtener información de un objeto option con unwrap:
        let byte_content = byte.unwrap();

        //Muestreo de información DEBUG:
        println!("| {:02} | BIN: {:08b} | ASCII: {: <7}|", byte_count, byte_content, byte_content);
    }

    //Muestreo de información DEBUG:
    println!("{}\n", line);
}
//---------------------------------------------------------------------------------------------------------------------------//
