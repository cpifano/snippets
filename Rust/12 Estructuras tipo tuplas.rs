//---------------------------------------------------------------------------------------------------------------------------//
// ESTRUCTURAS TIPO TUPLAS:
//---------------------------------------------------------------------------------------------------------------------------//
// En estas estructuras no se establecen atributos sino que se almacenan directamente los valores.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear estructura de tipo tupla:
struct Color (u32, u32, u32); //RGB

fn main() {
    let negro = Color(0, 0, 0);
    let blanco = Color(255, 255, 255);

    let mut otro_color = Color(200, 30, 45);

    //Green:
    otro_color.1 = otro_color.1 + 20;
}
//---------------------------------------------------------------------------------------------------------------------------//
