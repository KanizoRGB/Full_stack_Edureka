const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    const query = url.parse(req.url,true).query  //search or ask
    const name = query.name || 'Guest';

    res.write(`Hello , ${name} Welcome to my website`)
    res.end();
}).listen(8080);

console.log("Server is running")