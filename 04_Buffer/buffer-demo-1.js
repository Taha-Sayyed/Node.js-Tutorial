const buffer=require('node:buffer')
console.log(typeof buffer);//object

const {Buffer}=require('node:buffer')
console.log(typeof Buffer);//Function

const buf = Buffer.alloc(5);
buf.fill('a')
console.log(buf);

