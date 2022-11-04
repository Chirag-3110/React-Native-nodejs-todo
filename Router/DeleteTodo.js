const express=require('express');
const DeleteRoute=express.Router();
const TodoModel=require('../models/TodoModel');

DeleteRoute.delete('/api/deleteTodo',async(req,res)=>{
    const deletedItem=await TodoModel.deleteOne(req.body);
    if(deletedItem.acknowledged==1)
        res.send({message:"Data Delete successfully"})
    else
        res.send({message:"Falied to delete Item"})
})

module.exports=DeleteRoute;