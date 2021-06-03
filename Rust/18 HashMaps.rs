//---------------------------------------------------------------------------------------------------------------------------//
// HASHMAPS :
//---------------------------------------------------------------------------------------------------------------------------//
// Objetos literales, Arreglos asociativos, Diccionarios.
// HashMap<key, value>
//---------------------------------------------------------------------------------------------------------------------------//
//Importar HushMaps:
use std::collections::HashMap;

fn main() {
    //Crear un HashMap:
    let mut lenguajes = HashMap::new();

    //Insertar datos en el HashMap:
    lenguajes.insert("Javascript".to_string(), 80);
    lenguajes.insert("PHP".to_string(), 20);
    lenguajes.insert("Rust".to_string(), 60);

    println!("{:?}", lenguajes); //["Javascript": 80, "PHP": 20, "Rust": 60]

    //Buscar un elemento:
    let resultado_booleano = lenguajes.get("Rust"); //Retornará: Some(60).

    //Insertar solo si ya no existe el valor a ingresar (Python):
    lenguajes.entry("Python".to_string().or_insert(70));

    //Iterar sobre un HashMap:
    for (clave, valor) in &lenguajes {
        println!("Clave: {} | Valor: {}", clave, valor);
    }
}
//---------------------------------------------------------------------------------------------------------------------------//
