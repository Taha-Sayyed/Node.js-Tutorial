const http=require('node:http');

// res is a ServerResponse object, and it also has a req property attached to it.
// req: A reference to the original HTTP request object.


// res.end(): This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.
const server=http.createServer((req,res)=>{
    res.writeHead(200,`Everything is alright`);
    res.end(`Thanks for visiting`)
});//Return a new instance of http.Server

server.listen(8000,function(){
    console.log(`HTTP server is up and running`);
    
});//Starts the HTTP server listening for connections

