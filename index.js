const PDFDocument = require('pdfkit');
const fs = require('fs');
const inputFile = 'sample/sample1.jpeg';
const outputFile = 'sample/sample1.pdf';

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(outputFile));

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image(inputFile, {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
});
// Finalize PDF file
doc.end();
