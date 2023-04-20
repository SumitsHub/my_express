/**
 * HTTP module
 */

 const http = require('http');

 // const server = http.createServer((req, res)=>{
 //     console.log(req.url);
 //     res.write('Welcome to our home page');
 //     res.end();
 // })
 
 const server = http.createServer((req, res)=>{
     if(req.url === '/') res.end('Home page');
     else if(req.url === '/about') res.end('About page')
     else res.end(`<h1>Page not foud</h1>`);
 })
 
 
 server.listen(5000, ()=>{console.log('Server started at 5000');});