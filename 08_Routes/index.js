const bookrouter=require('./routes/book.routes');
const {loggerMiddleware}=require('./middlewares/logger')
const express=require('express');//This function is often called createApplication internally
const app=express();//calling createApplication function that returns application Object
const PORT=8000;

// Middlewares {Plugins}
app.use(express.json());
app.use(loggerMiddleware);

//Routes
app.use('/books',bookrouter);//This tells express if any routes starts with /books, then move request to this bookrouter 

app.listen(PORT,()=>{
    console.log(`HTTP server is running on PORT ${PORT}`);
})
