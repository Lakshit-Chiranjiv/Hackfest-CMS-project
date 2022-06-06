import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import { MONGO_DB_URI } from './dbConfig.js';
import ContrapiRouter from './routes/contrapiRoutes.js';
import { returnUserData } from './controllers/returnUserData.js';

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


export const loadAllEndpoints = async(userEmail) => {
    try {
        const foundUsers = await returnUserData(userEmail);
        const foundUser = foundUsers[0];
        const allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
    
        allProjects.map(project => {
            project.schemas.map(schema => {
                app.get(`/contrapi/${userEmail}/${project.name}/${schema.name}s`,(req,res) => {
                    const endpointData = schema.data;
                    res.json(endpointData)
                })
                app.get(`/contrapi/${userEmail}/${project.name}/${schema.name}s/:dataId`,(req,res) => {
                    const { dataId } = req.params;
                    const endpointData = schema.data;
                    const requiredData = endpointData.find(data => data.dataId.toString()===dataId);
                    res.json(requiredData);
                })
            })
        })
    } catch (error) {
        
    }
}



app.use('/contrapi',ContrapiRouter);

app.listen(PORT,()=> console.log("CMS server listening on port 5000"));