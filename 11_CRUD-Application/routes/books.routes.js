const express=require('express');
const router=express.Router();
const {getAllBook,getBooksbyId,createBook,deleteBookbyId}=require('../controllers/books.controller');

router.get('/',getAllBook);
router.get('/:id',getBooksbyId);
router.post('/',createBook);
router.delete('/:id',deleteBookbyId);

module.exports=router