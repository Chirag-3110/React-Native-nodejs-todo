const express=require('express');
const updateTodo=express.Router();
const TodoModel=require('../models/TodoModel');

updateTodo.put('/api/updateTodo',async(req,res)=>{
    await TodoModel.updateOne({_id:req.body.id},{
        $set:{
            Todo_Status:"completed"
        }
    })
    res.send({message:"Update Data Successfully"})
})

module.exports=updateTodo;