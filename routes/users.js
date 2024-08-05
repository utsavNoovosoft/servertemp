const express = require("express")
const router = express.Router()
router.get("/",(req,res)=>{
    res.send("user list")
})
router.get("/new",(req,res)=>{
    res.send("user new form ")
})

//always put new above the parameterised route like :id becausse express matches routes top to bottom so the first route that matches the sturcture will be executed 
router.get("/:id",(req,res)=>{
    res.send("user  "+ req.params.id)
})
router.route("/:id").post((req,res)=>{
    res.send("user created with id "+req.params.id)
}).put((req,res)=>{
    res.send("user updated with id",req.params.id)
}).delete((req,res)=>{
    res.send("user deleted with id",req.params.id)
})
module.exports =router