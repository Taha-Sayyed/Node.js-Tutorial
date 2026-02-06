/*
What this file does that:
-It reads the schema file ie schema.js and tells postgres running on URL given below to follow the given schema
-When we run the command 'npx drizzle-kit push', it will read this configuration file and push the schema to the particular URL
-When you run the command 'npx drizzle-kit studio'
*/ 
const dotenv=require('dotenv');
const {defineConfig}=require('drizzle-kit');

dotenv.config();

const config=defineConfig({
    dialect:"postgresql",
    out:"./drizzle",
    schema:"./drizzle/schema.js",
    dbCredentials:{
        url:process.env.DATABASE_URL
    }
})

// console.log(typeof config);//Object
module.exports=config;
