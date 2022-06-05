import dataModel from "../models/dataModel.js";
import { returnUserById } from './returnUserById.js'

export const addSchema = async(req,res) => {
    const { id,pid } = req.params;
    let foundUser;

    try {
        foundUser = returnUserById(id);
        const selectedProject = foundUser.projects.find(project => project.projectId===pid)
        allSchemas = selectedProject.schemas;
        if(!allSchemas) throw Error('cannot get due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }


    foundUser.projects.find(project => project.projectId===pid).schemas.push(req.body);

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not add schema');
        res.status(200).json({message: `successfully added schema : ${req.body.name}`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}