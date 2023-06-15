//Import external modules:
const fs = require('fs');

//Import signer service module:
const signerService = require('./signer.service');

// The PDF we're going to sign:
const pdfBuffer = fs.readFileSync('./report.pdf');

// The p12 certificate we're going to sign with:
const p12Buffer = fs.readFileSync('./certificates/keystore.p12');

//Sign PDF:
signerService.signPDF(pdfBuffer, p12Buffer, 'clave.123');