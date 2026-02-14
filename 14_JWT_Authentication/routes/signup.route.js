const express=require('express');
const router=express.Router();
const {insertData}=require('../controllers/controller')

router.post('/',insertData);
module.exports=router;