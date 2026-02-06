require('dotenv/config');
const db=require("./db");
// console.log(typeof db);//Object
const { usersTable }=require("./drizzle/schema");


async function getAllUsers(){
    const users=await db.select().from(usersTable);
    console.log('Users in DB',users);
    
    return users;
}

async function createUser({id,name,email}) {
    await db.insert(usersTable).values({
        id,name,email
    })
}

// createUser({
//     id:1,
//     name:"Taha",
//     email:"tahasayyedk00@gmail.com"
// });

// createUser({
//     id:2,
//     name:"Yaseen",
//     email:"yaseensayyedk00@gmail.com"
// });

console.log("HI coder");

getAllUsers();