// Streams - used to read and write data sequencely
// Writeable - write data sequencealy
// Readable - read data 
// Duplex - read and write
// Transform - modify data 

//? create big file
// const {writeFileSync} = require('fs');

// for(let i=0; i<10000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// default size: 64kb
// last buffer - remainder
// highWaterMark - control size
// 

stream.on('data', (res)=>{
    console.log(res);
})

stream.on('error', (err)=>{
    console.log(err);
})