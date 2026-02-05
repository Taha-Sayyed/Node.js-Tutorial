const express=require('express')
const app=express();
const {loggerMiddleware}=require('./middleware/logger');
const bookrouter=require('./routes/books.route');

const PORT=8000;

app.use(express.json());

//Routes
app.use('/books',bookrouter)
app.use(loggerMiddleware);

app.use('/books',bookrouter);


app.listen(PORT,()=>{
    console.log(`HTTP server is running in PORT ${PORT}`);
    
})