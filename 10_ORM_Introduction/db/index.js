const {drizzle}=require("drizzle-orm/node-postgres");
// console.log(typeof drizzle);//Function

//This connection is used when we send the data or receive it
//postgres://<username>:<password>@<host>:<port>/<db_name>
const db=drizzle(process.env.DATABASE_URL);
module.exports=db;