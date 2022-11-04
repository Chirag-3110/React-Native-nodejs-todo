const express=require('express');
const GetTodo=express.Router();
const TodoModel=require('../models/TodoModel');
GetTodo.get('/api/getTodo',async(req,res)=>{
    try {
        const allTodos=await TodoModel.find();
        res.send({allTodos:allTodos})
    } catch (error) {
        res.send({message:error})
    }
})

module.exports=GetTodo;