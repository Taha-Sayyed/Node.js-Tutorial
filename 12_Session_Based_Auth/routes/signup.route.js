const express=require('express');
const router=express.Router();
const {createToken}=require('../controllers/authentication.controller')

router.post('/',createToken);

module.exports=router;