const express = require("express")
const app = express()
require("dotenv").config()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{text :"world"})
})
//this is added by me
//utsav
const userRouter = require("./routes/users")
app.use("/users",userRouter)

let port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log("listening to port ",port)
})
//utsav123
//meher