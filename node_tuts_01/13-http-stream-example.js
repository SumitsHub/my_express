//* Stream Example */

// const {writeFileSync} = require('fs');

// for(let i=0; i<10000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }

var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', ()=>{
      fileStream.pipe(res);  
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })

  })
  .listen(5000);
