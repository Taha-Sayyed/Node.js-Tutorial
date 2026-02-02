const http=require('node:http');
const fs=require('node:fs')
const server=http.createServer(function(req,res){
    const method=req.method;//The request method as a string
    const path=req.url;//Request URL string. This contains only the URL that is present in the actual HTTP request
    const log=`\n[${Date.now()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt',log,'utf-8')

    switch(method){
        case'GET':{
            switch(path){
                case '/':
                    return res.writeHead(200,`Everything is Ok!`).end(`Hello message from the server and This is the ${method} method`)
                
                case '/contact-us':
                    return res.writeHead(200,`Everything is Ok!`).end(`My email is tahasayyedk00@gmail.com and contact-number is *******01`);
                
                case '/tweet':
                    return res.writeHead(200,`Everything is Ok!`).end(`Got the tweets from the DB`)
                }

        }
        break;
        
        case 'POST':{
            switch(path){
                case '/tweet':
                    return res.writeHead(200,`Everything is ok!`).end(`Your tweet is created!`);
            }
        }
        break;

    }
    return res.writeHead(404,`OOps not found`).end(`You are lost`)
    
    
})

server.listen(8000,function(){
    console.log("Http server is running on port 8000");
})
