import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.json({msg: 'cms server'});
})

//endpoint which returns all applications

//endpoint which returns all schemas in an application

//endpoint which returns all input field names and types in a schema

//endpoint to return all the data in a schema


app.listen(5000,()=> console.log("CMS server listening on port 5000"));