const express = require("express");

const app = express();

const port = 3000;

app.get("/",function(req,res){
    res.send("Samrat !")
})

app.post("/",function(req,res){
    res.send("got a post request")
})

app.put("/user",function(req,res){
    res.send("got a put request at /user")
})

app.listen(port,()=>{
console.log(`app listening in port ${port}`)
})