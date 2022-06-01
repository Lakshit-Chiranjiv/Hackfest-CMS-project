import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import { MONGO_DB_URI } from './dbConfig.js';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get('/',(req,res)=>{
    res.json({msg: 'cms server'});
})

//endpoint which returns all applications

//endpoint which returns all schemas in an application

//endpoint which returns all input field names and types in a schema

//endpoint to return all the data in a schema


app.listen(PORT,()=> console.log("CMS server listening on port 5000"));