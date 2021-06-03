//Import crates:
extern crate base64;

//Import libraries:
use std::str;

fn main() {
    let content = b"Hola mundo";

    let encoded_str = base64::encode(content);
    let decoded_bytes = base64::decode(&encoded_str).unwrap();

    let utf8_content = str::from_utf8(&decoded_bytes).unwrap();

    println!("{}", encoded_str);
    println!("{:?}", decoded_bytes);
    println!("{:?}", utf8_content);
}