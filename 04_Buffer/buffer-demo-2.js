const {Buffer}=require('node:buffer');
const buf=Buffer.allocUnsafe(10);

console.log(buf);

// buf.fill(5);
console.log(buf[0]);

