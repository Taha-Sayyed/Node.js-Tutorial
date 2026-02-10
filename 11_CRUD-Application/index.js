require('dotenv/config');
const express=require('express');
const app=express();
const bookrouter=require('./routes/books.routes');
const authorrouter=require('./routes/author.routes')
const PORT=8000;
const {loggerMiddleware}=require('./middlewares/logger');

//Middleware
app.use(express.json());
app.use(loggerMiddleware);

//Routes
app.use('/books',bookrouter);
app.use('/authors',authorrouter);

app.listen(8000,()=>{
    console.log(`HTTP server is running on port ${PORT}`);
})
