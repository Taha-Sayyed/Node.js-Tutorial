/*This middleware is responsible for fetching the session 
& keeping the data of the session and then forward the request along with the session to the route*/
const db=require('../db/index');
const {userSessions,userTable}=require('../db/schema')
const {eq}=require("drizzle-orm");
const jwt=require('jsonwebtoken')

exports.tokenMiddleware=function(req,res,next){
    //Header authorization: Bearer <Token>
    
    const tokenHeader=req.headers['authorization'];

    if(!tokenHeader){
        return next();
    }

    if(!tokenHeader.startsWith('Bearer')){
        return res.status(400).json({error:`Authorization Header must start with Bearer`})
    }

    const token=tokenHeader.split(' ')[1];
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
}