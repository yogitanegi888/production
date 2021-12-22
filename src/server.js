const express=require('express');
const appRouter=require('../src/Router/AdminRouter')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/production-store')
const app=express();
app.use(express.json());
 app.use("/api",appRouter);
 app.listen(8080,()=>{
     console.log("server is started")
 })