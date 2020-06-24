// 
const buf = new Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString())
console.log(buf.write('hello world'))
// console.log(Buffer.from('hello world'));

