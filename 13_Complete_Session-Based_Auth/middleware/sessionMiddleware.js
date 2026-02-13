/*This middleware is responsible for fetching the session 
& keeping the data of the session and then forward the request along with the session to the route*/
const db=require('../db/index');
const {userSessions,userTable}=require('../db/schema')
const {eq}=require("drizzle-orm");

exports.sessionMiddleware=async function(req,res,next){
    const sessionId=req.headers['session-id'];
    if(!sessionId){
        console.log(`Session id not found`);
        
        return next();
    }

    const [data]=await db.select({
        id:userSessions.id,
        userId:userSessions.userId,
        name:userTable.name,
        email:userTable.email
    })
    .from(userSessions)
    .rightJoin(userTable,eq(userTable.id,userSessions.userId))
    .where((table)=>eq(table.id,sessionId));

    if(!data){
        return next();
    }
    req.user=data;
    next();
}