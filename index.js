const express = require('express');
const app = express();
const mongoConnect=require('./mongodb')
const createTodo=require('./Router/TodoRoute');
const getTodos=require('./Router/GetTodo');
const deleteTodo =require('./Router/DeleteTodo')
const updateTodo=require('./Router/UpdateTodo');
const port=process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
  mongoConnect
})

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(createTodo)
app.use(getTodos);
app.use(deleteTodo)
app.use(updateTodo)





