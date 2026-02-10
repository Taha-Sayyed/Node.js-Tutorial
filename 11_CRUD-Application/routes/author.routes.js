const express=require('express');
const router=express.Router();
const {getAllAuthor,getAuthorById,createAuthor,getAllBooksByAuthor}=require('../controllers/author.controller');

router.get('/',getAllAuthor);
router.get('/:id',getAuthorById);
router.post("/",createAuthor);
router.get("/:id/books",getAllBooksByAuthor);

module.exports=router;
