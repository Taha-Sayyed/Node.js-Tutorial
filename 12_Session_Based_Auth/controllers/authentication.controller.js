const {DIARY,EMAILS}=require('../models/db/index');

exports.createToken=function(req,res){
    const {name,email,password}=req.body;
    if(EMAILS.has(email)){
        return res.status(400).json({error:'Email already taken'});
    }
    //Create a token for a user
    const token=`${Date.now()}`;
    DIARY[token]={name,email,password};
    EMAILS.add(email);    
    return res.json({status:'Success',token})
}

exports.getResourceAccess=function(req,res){
    const {token}=req.body;
    if(!token){
        return res.status(400).json({error:`Missing Token`});
    }
    if(!(token in DIARY)){
        return res.status(400).json({error:`Invalid Token`});
    }
    const entry=DIARY[token];
    return res.json({data:entry});
}