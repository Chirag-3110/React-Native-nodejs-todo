const express=require('express');
const GetTodo=express.Router();
const TodoModel=require('../models/TodoModel');
GetTodo.get('/api/getTodo/:userID',async(req,res)=>{
    try {
        const allTodos=await TodoModel.find({userID:req.params.userID});
        res.send({allTodos:allTodos})
    } catch (error) {
        res.send({message:error})
    }
})

module.exports=GetTodo;