const http=require('node:http');

const server=http.createServer(function(req,res){
    console.log(`Incoming request at [${Date.now()}]`);
    console.log(req.method);
    console.log(req.url);
    
    switch(req.url){
        case '/':
            res.writeHead(200,"Everything is ok!");
            return res.end(`Home Page`)
        case '/contact-us':
            res.writeHead(200,"Everything is ok!");
            return res.end("Contact me at tahasayyedk00@gmail.com")
        case '/about':
            res.writeHead(200,"Everything is ok!");
            return res.end("Taha is a software Eng at Meta")
        default:
            res.writeHead(404);
            return res.end(`You are lost`)
    }

})

server.listen(8000,()=>console.log(`Server is running on PORT:8000`));


