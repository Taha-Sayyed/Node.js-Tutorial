const { error } = require('node:console');
const db=require('../db/index');
const {userTable, userSessions}=require('../db/schema');
const {eq}=require("drizzle-orm");
const {randomBytes,createHmac}=require('node:crypto')

exports.insertData=async function(req,res){
    const {name,email,password}=req.body;
    const [existingUser]=await db
    .select({
        email:userTable.email,
    })
    .from(userTable)
    .where((table)=>eq(table.email,email));    

    if(existingUser){
        return res.status(400).json({error:`User with ${email} already exist`});
    }

    const salt=randomBytes(256).toString('hex');
    const hashedPassword=createHmac('sha256',salt).update(password).digest('hex');
    const [user]=await db
    .insert(userTable)
    .values({
        name,
        email,
        password:hashedPassword,
        salt
    })
    .returning({id:userTable.id});
    return res.status(201).json({status:'success',data:{userId:user.id}});
}

exports.userLogin=async function(req,res){
    const {email,password}=req.body;
    const [existingUser]=await db
    .select({
        id:userTable.id,
        email:userTable.email,
        salt:userTable.salt,
        password:userTable.password
    })
    .from(userTable)
    .where((table)=>eq(table.email,email));

    if(!existingUser){
        return res.status(401).json({error:`User with email:${email} does not exist`});
    }

    const salt=existingUser.salt;
    const existingHash=existingUser.password;

    const newHash=createHmac('sha256',salt).update(password).digest('hex');

    if(newHash!=existingHash){
        return res.status(400).json({error:`Incorrect Password`})
    }

    //Generate a session for user
    const [session]=await db
    .insert(userSessions)
    .values({
        userId:existingUser.id,
    }).returning({id:userSessions.id});
    return res.json({status:`Success`,sessionId:session.id});
}


exports.CurrentUser=function(req,res){
    const user=req.user;
    if(!user){
        return res.status(401).json({error:`You are not logged In`})
    }
    return res.json({user});
}