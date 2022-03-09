const express =require('express');
const app =express();
const mongoose=require('mongoose');

//import route
const authRouter=require('../studentConnect/router/auth');
var bodyParser = require('body-parser');


//stringify
//var stringify = require('stringify');


const dotenv=require('dotenv');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

dotenv.config();





//connecting to database 
mongoose.connect(process.env.mongoDbStr
,{useNewUrlParser:true},
()=>console.log('connected to db'));


//middleware for router
app.use('/api/student',authRouter);


app.listen(process.env.PORT,(req,res)=>{

    console.log(`app is running on port http:///localhost:${3000}`);
    
})

