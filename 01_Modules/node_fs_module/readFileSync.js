const fs= require('fs');

const readData=fs.readFileSync('notes.txt','utf-8');// Blocking Operation 
console.log(readData);

const writeData=fs.writeFileSync('output.txt',readData,'utf-8');//Blocking Operation
