//------------------------------------------------------------------------------------------------------------------------------------------//
// IMPORT & GLOBAL DEFINITIONS:
//------------------------------------------------------------------------------------------------------------------------------------------//
//Imports:
use std::io::prelude::*;
use std::path::Path;
use std::fs::File;

//Definir elementos constantes B64:
const B64_ALPHABET: [char; 64] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '+', '-',
];
const B64_PADDING: char = '=';

const CONSOLE_LINE_SMALL: &str = "|------------------------------------|";
const CONSOLE_LINE_LARGE: &str = "|----------------------------------------------------------------------------------------------|";
//------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------//
// MAIN APP:
//------------------------------------------------------------------------------------------------------------------------------------------//
fn main(){
    let path: &str = "file.txt";
    let verbose: bool = true;

    //Muestreo de información DEBUG:
    if verbose {
        //Ejecutar funcion de muestreo de información:
        get_file_info(&path);
    }

    //Obtener contenido del archivo:
    let content = get_file_content(&path);

    //Test encode an decode:
    let encoded = b64_encode(&content, verbose);
    let decoded = b64_decode(&encoded, verbose);

    //Muestreo de información DEBUG:
    if verbose {
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| RESUME INFO:");
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| CONTENT: {} \n| ENCODED: {} \n| DECODED: {}", content, encoded, decoded);
        println!("{}\n", CONSOLE_LINE_LARGE);
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------//
// GET FILE INFO:
//------------------------------------------------------------------------------------------------------------------------------------------//
fn get_file_info(file_path: &str) {
    //Crear path hacia el archivo:
    let path = Path::new(file_path);

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
    println!("\n{}", CONSOLE_LINE_SMALL);
    println!("| TOTAL FILE LENGTH: {: <16}|", file_len);
    println!("{}", CONSOLE_LINE_SMALL);

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
    println!("{}\n", CONSOLE_LINE_SMALL);
}
//------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------//
// GET FILE CONTENT:
//------------------------------------------------------------------------------------------------------------------------------------------//
fn get_file_content(file_path: &str) -> String {
    //Crear path hacia el archivo:
    let path = Path::new(file_path);

    //Crear el display name (Solo nombre del archivo):
    let display = path.display();

    //Abrir el archivo (read-only);
    let mut file = match File::open(&path) {
        Err(why) => panic!("No se pudo abrir el archivo {}: {}", display, why),
        Ok(file) => file,
    };

    //Leer el contenido del archivo en un string:
    let mut content = String::new();

    match file.read_to_string(&mut content) {
        Err(why) => panic!("No se pudo leer el archivo {}: {}", display, why),
        Ok(_) => return content,
    };
}
//------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------//
// B64 ENCODE:
//------------------------------------------------------------------------------------------------------------------------------------------//
fn b64_encode(content: &str, verbose: bool) -> String {
    //Obtener array de caracteres de cada Byte del str (Valor ASCII):
    let characters: &[u8] = content.as_bytes();

    //Definir vector B64 y calcular cual será su tamaño final en base a la cantidad de caracteres:
    let mut base64_output = Vec::with_capacity((characters.len() / 3 + 1) * 4);

    //Inicializar contador:
    let mut counter = 0;

    //Muestreo de información DEBUG:
    if verbose {
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| ENCODE PROCESS:");
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| INTPUT CONTENT: {}", content);
        println!("| INPUT CHARACTERS BYTES: {:?}", characters);
        println!("{}", CONSOLE_LINE_LARGE);
    }

    //Iterar de a tres elementos (3 bytes):
    while counter + 3 <= characters.len() {
        //Generar 4 bytes en base a 3 bytes de origen (Algoritmo de desfase):
        let first_base64_character  = get_first_b64_byte(characters[counter]);
        let second_base64_character = get_second_b64_byte(characters[counter], characters[counter + 1]);
        let third_base64_character  = get_third_b64_byte(characters[counter + 1], characters[counter + 2]);
        let fourth_base64_character = characters[counter + 2] & 0b00111111;

        //Muestreo de información DEBUG:
        if verbose {
            println!("| FIRST: {:?}", first_base64_character);
            println!("| SECOND: {:?}", second_base64_character);
            println!("| THIRD: {:?}", third_base64_character);
            println!("| FOURTH: {:?}\n|", fourth_base64_character);
        }

        //Asignar valores del alfabeto B64 según el valor del nuevo byte:
        base64_output.append(&mut vec![
            B64_ALPHABET[first_base64_character as usize],
            B64_ALPHABET[second_base64_character as usize],
            B64_ALPHABET[third_base64_character as usize],
            B64_ALPHABET[fourth_base64_character as usize],
        ]);
        
        //Incrementar contador:
        counter += 3;
    }

    //Chequear en caso de que sea necesario agregar caracter de relleno (=):
    //Dos bytes de relleno:
    if counter + 1 == characters.len() {
        let first_base64_character  = get_first_b64_byte(characters[counter]);
        let second_base64_character = get_second_b64_byte(characters[counter], 0);

        //Muestreo de información DEBUG:
        if verbose {
            println!("| FIRST: {:?}", first_base64_character);
            println!("| SECOND: {:?}", second_base64_character);
        }

        base64_output.append(&mut vec![
            B64_ALPHABET[first_base64_character as usize],
            B64_ALPHABET[second_base64_character as usize],
            B64_PADDING,
            B64_PADDING,
        ]);
    //Un solo byte de relleno:
    } else if counter + 2 == characters.len() {
        let first_base64_character  = get_first_b64_byte(characters[counter]);
        let second_base64_character = get_second_b64_byte(characters[counter], characters[counter + 1]);
        let third_base64_character  = get_third_b64_byte(characters[counter + 1], 0);

        //Muestreo de información DEBUG:
        if verbose {
            println!("| FIRST: {:?}", first_base64_character);
            println!("| SECOND: {:?}", second_base64_character);
            println!("| THIRD: {:?}", third_base64_character);
        }
        base64_output.append(&mut vec![
            B64_ALPHABET[first_base64_character as usize],
            B64_ALPHABET[second_base64_character as usize],
            B64_ALPHABET[third_base64_character as usize],
            B64_PADDING,
        ]);
    }

    //Muestreo de información DEBUG:
    if verbose {
        println!("|\n| BASE64: {:?}", base64_output);
        println!("{}\n", CONSOLE_LINE_LARGE);
    }

    //Retornar string Base64:
    base64_output.into_iter().collect::<String>()
}

fn get_first_b64_byte(first_byte: u8) -> u8 {
    (first_byte & 0b1111100) >> 2
}

fn get_second_b64_byte(first_byte: u8, second_byte: u8) -> u8 {
    (first_byte & 0b00000011) << 4 | ((second_byte & 0b11110000) >> 4)
}

fn get_third_b64_byte(second_byte: u8, third_byte: u8) -> u8 {
    (second_byte & 0b00001111) << 2 | ((third_byte & 0b11000000) >> 6)
}
//------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------//
// B64 DECODE:
//------------------------------------------------------------------------------------------------------------------------------------------//
fn b64_decode(base64: &str, verbose: bool) -> String {
    //Validar que el string sea múltiplo de 4:
    if base64.len() % 4 != 0 {
        panic!("Un string base64 debe ser múltiplo de 4 (caracteres).");
    }

    //Muestreo de información DEBUG:
    if verbose {
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| DECODE PROCESS:");
        println!("{}", CONSOLE_LINE_LARGE);
        println!("| BASE64 STR INPUT: {}", base64);
    }

    //Crear un vector con bytes en base al str (base64):
    let base64_bytes: Vec<u8> = base64.chars().map(|character| {
        //El valor de bit es igual al valor del carácter menos el valor ascii más el desplazamiento en el alfabeto base64.
        if character.is_ascii_uppercase() {
            (character as u32) - 65
        } else if character.is_ascii_lowercase() {
            (character as u32) - 97 + 26
        } else if character.is_numeric() {
            (character as u32) - 48 + 52
        } else if character == B64_PADDING {
            return 255;
        } else {
            panic!("Todos los caracteres base64 deben estar comprendidos de [A-Za-z0-9]");
        }
    }).map(|character| character as u8).collect::<Vec<u8>>();
    
    //Muestreo de información DEBUG:
    if verbose {
        println!("| BASE64 CHARACTER BYTES: {:?}", base64_bytes);
        println!("{}", CONSOLE_LINE_LARGE);
    }

    //Obtener una coleccion con arrays separados de a 4 bytes (chunks):
    let chunks: Vec<&[u8]> = base64_bytes.chunks(4).collect();

    //Inicializar output string:
    let mut output = String::new();
    
    //Reccorrer cada conjunto de 4 bytes:
    for chunk in &chunks {
        let mut character_bits: u32 = 0;
        character_bits |= (chunk[0] as u32) << 18;
        character_bits |= (chunk[1] as u32) << 12;

        let character_bytes;

        //Chequear si el último býte es un byte de relleno (=):
        if chunk[2] == 255 {
            character_bytes = character_bits.to_be_bytes()[1..2].to_vec();
        //Chequear si el ante-último býte es un byte de relleno (=):
        } else if chunk[3] == 255 {
            character_bits |= (chunk[2] as u32) << 6;
            
            character_bytes = character_bits.to_be_bytes()[1..3].to_vec();
        } else {
            character_bits |= (chunk[2] as u32) << 6;
            character_bits |= chunk[3] as u32;
            
            character_bytes = character_bits.to_be_bytes()[1..4].to_vec();
        }

        let characters = std::str::from_utf8(&character_bytes);

        //Muestreo de información DEBUG:
        if verbose {
            println!("|\n| CHARACTER BYTES: {:?}", character_bytes);
            println!("| UTF-8 CHARACTERS: {:?}", characters);
        }

        match characters {
            Ok(characters) => output.push_str(characters),
            Err(_) => panic!("El valor codificado en base64 no contiene una cadena válida (UTF8)."),
        }
    }

    //Muestreo de información DEBUG:
    if verbose {
        println!("{}\n", CONSOLE_LINE_LARGE);
    }

    //Retornar str decodificado:
    output
}
//------------------------------------------------------------------------------------------------------------------------------------------//