//Module -http- Built in module hence no installation needed
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == "/" || req.url== "/home"){
        res.write("<h1>This is a home page</h1>");
        res.write("<img src='car-key.png'>");
        res.end();
    } else if (req.url == '/about'){
        res.write("<h1>This is About Page<h1>");
        res.end();
    } else {
        res.write("<h1>404 Page not found<h1>");
        res.end();
    }
})

server.listen(8709,()=>{
    console.log('Server listening at port 8709')
});