const express=require('express');
const router=express.Router();
const {getAllBook,getBooksbyId,insertData,deleteBookbyId}=require('../controllers/books.controller');

router.get('/',getAllBook);
router.get('/:id',getBooksbyId);
router.post('/',insertData);
router.delete('/:id',deleteBookbyId);

module.exports=router