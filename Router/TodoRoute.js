const express=require('express');
const createTodo=express.Router();
const Todos=require('../models/TodoModel');
createTodo.post('/api/create',async(req,res)=>{
    const todo=new Todos(req.body);
    const response=await todo.save();
    // console.log(req.body)
    res.send({message:"Data added successfully",Todo:response})
})

module.exports=createTodo;