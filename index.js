const express= require("express")
require ("dotenv").config()

const app = express()

const port = 4000

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get('/twitter',(req,res)=>{
    res.send("Welcome to twitter")
})

app.get("/youtube",(req,res)=>{
    res.send(`<h1>Welcome to MY Youtube Channel</h1>`)
})

app.get('/login',(req,res)=>{
    res.send(`<buttom>Login Here</buttom>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`This server runnin on port ${port}`);
})