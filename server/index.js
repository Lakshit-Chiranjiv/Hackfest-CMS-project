import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import { MONGO_DB_URI } from './dbConfig.js';
import ContrapiRouter from './routes/contrapiRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

mongoose.connect(MONGO_DB_URI)
.then(()=>{console.log("Connected to database")})
.catch((err) => {console.log(err)});

const db = mongoose.connection;

app.get('/',(req,res)=>{
    res.json({msg: 'cms server'});
})

app.use('/contrapi',ContrapiRouter);

app.listen(PORT,()=> console.log("CMS server listening on port 5000"));