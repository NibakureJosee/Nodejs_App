const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const PORT=2500;
const app=express();
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log("Running...........");
})
//requiring user routes 
const {userRoutes}=require("./routes/userRoutes")
const URL="mongodb+srv://Brainiacs_user:jPxVoB5sOM4UdVq1@cluster0.wmwkp.mongodb.net/test";
//mongodb://localhost:27017/databaseName
//db connection
const dbConnection=()=>{
    mongoose.connect(URL,()=>{
        console.log("Db connected......................");
    })
}
dbConnection();

const swaggerUi = require('swagger-ui-express'),swaggerDocument = require('./swagger.json');

//CRUD
//C: create httpMethod: post, 
//R: read httpMethod: get,
//U: update httpMethod: put,
//D: delete httpMethod: delete, 

//    /=> localhost:2500;
app.get("/",(req,res)=>{
  return  res.send("welcome to brainiacs")
})
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.use("/user",userRoutes)
