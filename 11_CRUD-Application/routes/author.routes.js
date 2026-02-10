const express=require('express');
const router=express.Router();
const {getAllAuthor,getAuthorById,createAuthor}=require('../controllers/author.controller');

router.get('/',getAllAuthor);
router.get('/:id',getAuthorById);
router.post("/",createAuthor);

module.exports=router;
