const express = require("express");

const app=express();
const port=3000;
// passing routes
app.get("/",(req,res)=>{
res.json("This is home page")
});
app.get("/users",(req,res)=>{
    res.json({message:"get all users"});
    });
    app.get("/users/:id",(req,res)=>{
        res.json({message:`get users with ID ${req.params.id}`});
        });
        // post 
        app.post("/users/",(req,res)=>{
            res.json({message:`create new user `});
            });
            // put to update
            app.put("/users/:id",(req,res)=>{
            res.json({message:`update user  with ID ${req.params.id}`});
        });
        // delete
        app.delete("/users/:id",(req,res)=>{
            res.json({message:`delete user with ID ${req.params.id}`});
        });
app.listen(port,()=>{
    console.log(`express app started on port ${port}`);
});

