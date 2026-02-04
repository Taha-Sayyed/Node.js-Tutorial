const express=require('express');//This function is often called createApplication internally
const app=express();//calling createApplication function that returns application Object
const PORT=8000;

//In-memory Database
const books=[
    {id:1,title:'Book One',author:'Author one'},
    {id:2,title:'Book Two',author:'Author Two'}
]

// Middlewares {Plugins}
app.use(express.json());


//Routes
app.get('/books',(req,res)=>{
    // res.setHeader()//Internally uses the node module
    res.set({
        'x-author':'myserver'
    })//Use Express module to set Headers
    res.json(books);
});

app.get('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:`Bad Request`})
    }
    const book=books.find((e)=>{        
        return e.id===id
    })
    
    if(!book){
        return res.status(404).json({error:`Book with id ${id} does not exist`})
    }
    else{
        return res.json(book);
    }
});

app.post('/books',(req,res)=>{    
    // console.log(typeof req.body);//Object
    
    const {title,author}=req.body;

    if(!title || title===''){
        return res.status(400).json({error:`Title is required`})
    }
    if(!author || author===''){
        return res.status(400).json({error:`Author is required`})
    }
    const id=books.length+1;
    const book={id,title,author}//object
    books.push(book);
    return res.status(201).json({message:`This route is under Dev`})
});

app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:`Bad request`});
    }
    const indexBook=books.findIndex((e)=>{
        e.id===id;
    });
    if(!indexBook){
        return res.status(400).json({error:`Cannot find the book with id:${id}`})
    }
    books.splice(indexBook,1);
    return res.status(200).json({message:`Book with id:${id} is deleted`})
})

app.listen(PORT,()=>{
    console.log(`HTTP server is running on PORT ${PORT}`);
})
