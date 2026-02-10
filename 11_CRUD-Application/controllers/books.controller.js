const {authorsTable}=require("../models/author.model.js");
const {booksTable}=require("../models/book.model.js");
const {sql}=require('drizzle-orm');
const db=require("../db")
const {eq,ilike}=require('drizzle-orm');
const { table } = require("node:console");

exports.getAllBook=async function(req,res){
    const search=req.query.search;
    if(search){
        const books=await db.select().from(booksTable).where(sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`);;
        console.log(books);
        
        return res.json(books);
    }
    
    const books=await db.select().from(booksTable);
    return res.json(books);
}

exports.getBooksbyId=async function(req,res){
    const id=req.params.id;
    
    const [book]=await db.select().from(booksTable).where((table)=>eq(table.id,id)).leftJoin(authorsTable,eq(booksTable.authorId,authorsTable.id)).limit(1);
    
    if(!book){
        return res.status(404).json({error:`Book with id ${id} does not exist`})
    }
    else{
        return res.json(book);
    }
}

exports.createBook=async function(req,res){
    const {title,description,authorId}=req.body;

    if(!title || title===''){
        return res.status(400).json({error:`Title is required`})
    }
    if(!authorId || authorId===''){
        return res.status(400).json({error:`Author is required`})
    }
    const [result]=await db.insert(booksTable).values({
        title,
        authorId,
        description
    }).returning({
        id:booksTable.id
    });
    return res.status(201).json({message:`Books created successfully. Id is ${result.id}`})
}

exports.deleteBookbyId=async function(req,res){
    const id=req.params.id;
    await db.delete(booksTable).where(eq(booksTable.id,id));

    return res.status(200).json({message:`Book with id:${id} is deleted`})
}