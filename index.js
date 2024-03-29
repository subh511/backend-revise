const express = require("express");
const bodyParser = require("body-parser");

//middleware

const app = express();

const port = 3000;

app.use(bodyParser.json())

// const myLogger = function(req,res,next){
//     console.log('logged!')
//     next()
// }

// app.use(myLogger)

app.get("/",function(req,res){
    res.send("Samrat !")
})

app.get("/routeHandler", function(req,res){
    // res.json({
    //     name:"samrat",
    //     age:"25"
    // })
    res.send('<h1>hello</h1>')
})

app.get("/",function(req,res){
    console.log(req.body)
    res.send('hello world!')
})

app.post("/conversation",function(req,res){
    console.log(req.body)
    res.send({
        msg: "2 + 2 = 4"
    })
})

// app.post("/",function(req,res){
//     res.send("got a post request")
// })

// app.put("/user",function(req,res){
//     res.send("got a put request at /user")
// })

// app.delete("/user",function(req,res){
//     res.send("got a delete request at /user")
// })

app.listen(port,()=>{
console.log(`app listening in port ${port}`)
})