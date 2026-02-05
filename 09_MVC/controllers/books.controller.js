const {BOOKS}=require('../models/books')

exports.getAllBook=function(req,res){
    res.json(BOOKS);
}

exports.getBooksbyId=function(req,res){
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:`Bad Request`})
    }
    const book=BOOKS.find((e)=>{        
        return e.id===id
    })
    
    if(!book){
        return res.status(404).json({error:`Book with id ${id} does not exist`})
    }
    else{
        return res.json(book);
    }
}

exports.insertData=function(req,res){
    const {title,author}=req.body;

    if(!title || title===''){
        return res.status(400).json({error:`Title is required`})
    }
    if(!author || author===''){
        return res.status(400).json({error:`Author is required`})
    }
    const id=BOOKS.length+1;
    const book={id,title,author}//object
    BOOKS.push(book);
    return res.status(201).json({message:`This route is under Dev`})
}

exports.deleteBookbyId=function(req,res){
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:`Bad request`});
    }
    const indexBook=BOOKS.findIndex((e)=>{
        e.id===id;
    });
    if(!indexBook){
        return res.status(400).json({error:`Cannot find the book with id:${id}`})
    }
    BOOKS.splice(indexBook,1);
    return res.status(200).json({message:`Book with id:${id} is deleted`})
}