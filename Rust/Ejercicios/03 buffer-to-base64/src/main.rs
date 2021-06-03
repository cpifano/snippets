//Import crates:
extern crate base64;

//Import libraries:
use std::io::prelude::*;
use std::path::Path;
use std::fs::File;
use std::io::BufReader;
use std::str;

fn main() {
    //Codificar archivo a base64:
    let encoded = encode_b64("file.txt");

    //Muestreo de información:
    println!("B64 ENCODED: {}", &encoded);

    //Decodificar str base64 a archivo:
    decode_b64(encoded, "destination.txt");
}

fn encode_b64(path: &str) -> String {
    //Obtener buffer en base a un archivo a través de su ruta:
    let buffer = file_to_buffer(&path);

    //Codificar buffer en base64:
    let encoded_str = base64::encode(&buffer);

    //Retornar str base64:
    encoded_str
}

fn decode_b64(encoded_str: String, file_name: &str){
    //Decodificar str base64:
    let decoded_bytes = base64::decode(&encoded_str).unwrap();

    //Crear archivo en base a los bytes decodificados:
    create_file(decoded_bytes, file_name);
}

fn file_to_buffer(path: &str) -> Vec<u8> {
    //Crear path hacia el archivo:
    let path = Path::new(&path);

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (read-only):
    let file = match File::open(&path) {
        Err(why) => panic!("No se pudo abrir el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Crear un buffer reader:
    let mut reader = BufReader::new(file);

    //Crear vector u8 para alojar buffer:
    let mut buffer: Vec<u8> = Vec::new();

    //Leer hasta el final (EOF) y cargar en el buffer en caso de éxito:
    reader.read_to_end(&mut buffer).expect("Error al leer el archivo en el buffer.");

    //Retornar buffer:
    buffer
}

fn create_file(decoded_bytes: Vec<u8>, file_name: &str) {
    //Crear path hacia el archivo:
    let path = Path::new(file_name);

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (write-only):
    let mut file = match File::create(&path) {
        Err(why) => panic!("No se pudo crear el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Escribir el contenido de la constante `CONTENIDO` como string en el archivo:
    match file.write_all(&decoded_bytes) {
        Err(why) => panic!("No se pudo escribir el archivo {}: {}", display, why),
        Ok(_) => println!("Escritura exitosa {}", display),
    }
}