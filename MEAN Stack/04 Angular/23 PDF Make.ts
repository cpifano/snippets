//---------------------------------------------------------------------------------------------------------------------------//
// PDF MAKE:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar librería:
npm install pdfmake --save
npm i @types/pdfmake --save
npm i @types/pdfmake --save-dev

//Importar al módulo PDF Make y sus fuentes de letra:
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

//Definir contenido y estilos del PDF:
const docDefinition : any = {
  content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
  ]
};

//Crear PDF y Descargar:
pdfMake.createPdf(docDefinition).download();

//Crear PDF y abrir en una nueva ventana:
pdfMake.createPdf(docDefinition).open();

//Crear PDF y abrir dialogo de impresión:
pdfMake.createPdf(docDefinition).print();

//Crear PDF y obtener el mismo en base64:
const pdfDocGenerator = pdfMake.createPdf(docDefinition);
pdfDocGenerator.getBase64((data) => {
	alert(data);
});

//Crear PDF y obtener el Buffer del mismo:
const pdfDocGenerator = pdfMake.createPdf(docDefinition);
pdfDocGenerator.getBuffer((buffer) => {
	// ...
});
//---------------------------------------------------------------------------------------------------------------------------//
