
const http =require("http");
const express = require("express");

const app =express();

app.use("/product", (req, res, next)=>{
    res.send("Product page");
});
app.use("/", (req , res ,next)=>{
    console.log("First web application");
    res.send("hello");    
});


app.listen(4000);