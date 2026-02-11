const express=require('express');
const app=express();
const signupRouter=require('./routes/signup.route')
const resourceRouter=require('./routes/resource.route')
const PORT=8000;

//Middle-ware
app.use(express.json());

//Routes
app.use('/signup',signupRouter);
app.use('/resource',resourceRouter);

app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`);
});