//---------------------------------------------------------------------------------------------------------------------------//
// CRYPTO JS:
//---------------------------------------------------------------------------------------------------------------------------//
const CryptoJS = require("crypto-js");

//Encriptar mensaje:
let encrypted = CryptoJS.AES.encrypt("Mensaje", "MY_SECRET");
console.log('Mensaje encriptado: ' + encrypted);

//Desencriptar mensaje:
let decrypted = CryptoJS.AES.decrypt(encrypted, "MY_SECRET");
console.log('Mensaje desencriptado: ' + decrypted);
//---------------------------------------------------------------------------------------------------------------------------//
