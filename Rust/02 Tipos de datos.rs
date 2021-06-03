//---------------------------------------------------------------------------------------------------------------------------//
// INFERENCIA DE TIPOS:
//---------------------------------------------------------------------------------------------------------------------------//
fn main (){
    //ENTEROS por cantidad de bits:
    //i8, i16, i32, i64, i128
    let entero: i32 = -10;

    //Solo ENTEROS POSITIVOS por cantidad de bits:
    //u8, u16, u32, u64, u128
    let positivo: u32 = 10;

    //CHAR UTF-8:
    let caracter: char = 'a';
    let caracter = 'a'; //Se define con el uso de comillas simples.

    //FLOAT:
    //f32, f64
    let real: f32 = 12.5;

    //BOOLEANO:
    let booleano: bool = true;

    //STR:
    //str: Es una cadena de caracteres inmutables.
    //str se aloja en el stack.
    let variable_str = "Soy tipo str";

    //A la hora de definirlo como tipo de dato se utiliza el '&':
    let variable_str: &str;

    //STRING:
    //String es una cadena de caracteres mutable.
    //String se aloja en el heap.
    let mut palabra = String::new(); //String vacío.
    palabra = String::from("Hola"); //From crea un string a partir de una cadena de caracteres.

    //Agregar contenido a mi String:
    palabra.push_str(" mundo!");

    //Convertir un STR a STRING:
    let cadena = "Otro caso de prueba".to_string();
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPERADORES:
//---------------------------------------------------------------------------------------------------------------------------//
//Matemáticos:
// + - / * %

//Relacionales:
// > < >= <= == !=

//Lógicos:
// && (AND) || (OR)
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ARREGLOS:
//---------------------------------------------------------------------------------------------------------------------------//
fn main(){
    //Una vez definido el arreglo el mismo no podrá modificar su largo:
    let numeros = [10, 20, 30];

    //Podemos definir el tipo del contenido y el largo máximo de contenido:
    let numeros: [i32; 5] = [10, 20, 30, 40, 50];

    //Obtener dato de un arreglo:
    let dato = numeros[1];

    //Ver contenido del arreglo:
    println!("VARDUMP: {:?}", numeros);

    //Podemos crear un arreglo que repita el dato indicado segun la cantidad especificada:
    let valores = [true; 4]; //[true, true, true, true]
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TUPLAS:
//---------------------------------------------------------------------------------------------------------------------------//
// En Rust las tuplas a diferencia de los arreglos, nos permiten almacenar distintos tipos de datos.
//---------------------------------------------------------------------------------------------------------------------------//
fn main(){
    let tupla = (10, false, 3.14);

    //Especificar tipos de datos del contenido:
    let tupla: (i32, bool, f64) = (10, false, 3.14);

    //Obtener dato de una tupla:
    let dato = tupla.1;
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// VECTORES:
//---------------------------------------------------------------------------------------------------------------------------//
// En Rust la diferencia entre un arreglo y un vector es que un vector si puede incrementar su tamaño.
//---------------------------------------------------------------------------------------------------------------------------//
fn main(){
    //Crear un vector utilizando estructura Vec:
    let mut vector = Vec::new();

    //Especificar tipo de dato del contenido:
    let mut vector: Vec<i32> = Vec::new();

    //Crear un vector utilizando macro vec!:
    let mut vector = vec![1, 2, 3];

    //Agregar un elemento al final del vector:
    vector.push(4);

    //Insertar en la posición 0 el valor 5:
    vector.insert(0, 5);

    //Quitar un elemento posición 4 (indice):
    vector.remove(4);

    //Obtener dato de un vector:
    let dato = vector[1];

    //Modificar un elemento:
    vector[2] = 8;

    //Quitar último elemento:
    let ultimo = vector.pop().unwrap();
}
//---------------------------------------------------------------------------------------------------------------------------//
