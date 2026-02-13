const express=require('express');
const router=express.Router();
const {CurrentUser}=require('../controllers/controller')

router.get('/',CurrentUser);
module.exports=router;