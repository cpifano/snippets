//---------------------------------------------------------------------------------------------------------------------------//
// BUFFER:
//---------------------------------------------------------------------------------------------------------------------------//
//Read Buffer:
use std::io::prelude::*;
use std::io::BufReader;
use std::fs::File;

fn main() -> std::io::Result<()> {
    let f = File::open("log.txt")?;
    let mut reader = BufReader::new(f);

    let mut line = String::new();
    let len = reader.read_line(&mut line)?;
    println!("La primera linea es {} bytes de largo", len);
    Ok(())
}
//---------------------------------------------------------------------------------------------------------------------------//
