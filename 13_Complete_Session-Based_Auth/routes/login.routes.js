const express=require('express');
const router=express.Router();
const {userLogin}=require('../controllers/controller')

router.post('/',userLogin);
module.exports=router;