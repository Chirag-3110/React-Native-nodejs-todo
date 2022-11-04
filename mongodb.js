const mongoose=require('mongoose');
const url="mongodb+srv://chirag:3Ghomu9MZiMLYCkF@cluster0.rpaoiv2.mongodb.net/TodoDataBase?retryWrites=true&w=majority"

async function mongoConnect(req,res){
    mongoose.connect(url,{
        useNewUrlParser:true,useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Connected")
    })
    .catch((error)=>{
        console.log(error);
    })
}
mongoConnect();