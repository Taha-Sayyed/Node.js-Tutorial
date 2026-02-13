const express=require('express');
const router=express.Router();
const {CurrentUser,updateUserName}=require('../controllers/controller')

router.get('/',CurrentUser);
router.patch('/update/name',updateUserName);
module.exports=router;