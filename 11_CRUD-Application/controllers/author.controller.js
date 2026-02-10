const {authorsTable}=require('../models/author.model');
const db=require('../db');
const {eq}=require("drizzle-orm");
const { error } = require('node:console');

exports.getAllAuthor=async function(req,res){
    const authors=await db.select().from(authorsTable);
    return res.json(authors);
}

exports.getAuthorById=async function(req,res){
    const id=req.params.id;
    const [author]=await db.select().from(authorsTable).where(eq(authorsTable.id,id));
    if(!author){
        return res.status(404).json({error:`Author with id ${id} does not exist`});
    }
    return res.json(author);
}

exports.createAuthor=async function(req,res){
    const {firstName,lastName,email}=req.body;
    const [result]=await db.insert(authorsTable).values({
        firstName,
        lastName,
        email,
    }).returning({id:authorsTable.id});
    return res.json({message:`Author has been created. Id is ${result.id}`});
}
