import dataModel from "../models/dataModel.js";
import { returnUserById } from './returnUserById.js'

export const deleteSchema = async(req,res) => {
    const { id,pid,sid } = req.params;
    let foundUser;
    let allSchemas;
    try {
        const foundUsers = await returnUserById(id);
        foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId===pid)
        allSchemas = selectedProject.schemas;
        if(!allSchemas) throw Error('cannot get user schemas due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }

    const filteredSchemas = allSchemas.filter(schema => schema.schemaId!==sid)

    foundUser.projects.find(project => project.projectId===pid).schemas = filteredSchemas;

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not delete schema');
        res.status(200).json({message: `successfully deleted schema`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}