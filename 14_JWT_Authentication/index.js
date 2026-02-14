require('dotenv/config');
const express=require('express');
const app=express();
const signUpRouter=require('./routes/signup.route');
const loginRouter=require('./routes/login.routes');
const userRouter=require('./routes/currentUser.route');
const {tokenMiddleware}=require('./middleware/tokenMiddleware');


//Middleware
app.use(express.json());
app.use(tokenMiddleware)

//Routes
app.use('/user/signup',signUpRouter);
app.use('/user/login',loginRouter);
app.use('/user',userRouter);


app.listen(8000,()=>{
    console.log('Server is listening on port 8000');
})