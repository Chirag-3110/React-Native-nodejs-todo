const mongoose=require('mongoose');
const mongoSchema=mongoose.Schema;

const todos=new mongoSchema({
    Todo_Name:String,
    Todo_Descrition:String,
    Todo_Status:String,
    createdAt:String,
    dueTime:String,
    userID:String,
});

module.exports=mongoose.model("todos",todos);