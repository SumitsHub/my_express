const http = require('http');

const server = http.createServer()

server.on('request', (req, res)=>{
    console.log('Listening...');
    res.end('Okay')
})

server.listen(5000);