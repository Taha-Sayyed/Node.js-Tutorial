const express=require('express');
const {BOOKS}=require('../db/book');
const router=express.Router();//Returns a Function object

console.log(typeof router);

router.get('/',(req,res)=>{
    // res.setHeader()//Internally uses the node module
    res.set({
        'x-author':'myserver'
    })//Use Express module to set Headers
    res.json(BOOKS);
});

router.get('/:id',(req,res)=>{
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
});

router.post('/',(req,res)=>{    
    // console.log(typeof req.body);//Object
    
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
});

router.delete('/:id',(req,res)=>{
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
})

module.exports=router