//Import external modules:
const fs = require('fs');

//Import signer service module:
const signerService = require('./signer.service');

// The PDF we're going to sign:
const pdfBuffer = fs.readFileSync('./report.pdf');

// The p12 certificate we're going to sign with:
const p12Buffer = fs.readFileSync('./keystore.p12');

//Sign PDF:
signerService.signPDF(pdfBuffer, p12Buffer, 'clave.123');


// INFO EXTRA:
// .pfx: es la copia de seguridad con clave privada de un certificado (exportado desde Internet Explorer).
// .p12: es la copia de seguridad con clave privada de un certificado (exportado desde Firefox).
// .cer: es un formato de exportación de clave pública desde Internet Explorer, puede ser en formato DER o formato PEM (Base64)
// .crt: es un formato de exportación de clave pública desde Mozilla firefox. Es en formato PEM (Base 64).

// Convertir .PFX a .P12 con keytool:
// keytool -importkeystore -destkeystore keystore.p12 -deststoretype pkcs12 -srckeystore keystore.pfx
