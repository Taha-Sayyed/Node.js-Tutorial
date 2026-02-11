const express=require('express');
const router=express.Router();
const {getResourceAccess}=require('../controllers/authentication.controller')

router.get('/',getResourceAccess);

module.exports=router;