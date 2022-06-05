import { returnUserById } from './returnUserById.js'
import dataModel from "../models/dataModel.js";

export const deleteInputField = async(req,res) => {
    const { id,pid,sid,fid } = req.params;
    let foundUser;
    let schemaInputFields;
    try {
        const foundUsers = await returnUserById(id);
        foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId.toString()===sid)
        schemaInputFields = selectedSchema.inputFields;
        if(!schemaInputFields) throw Error('cannot get input fields due to some server error');
    } catch (error) {
        res.status(400).json({message: error.message});
    }

    const filteredschemaInputFields = schemaInputFields.filter(field => field.fieldId.toString()!==fid);

    foundUser.projects.find(project => project.projectId.toString()===pid).schemas.find(schema => schema.schemaId.toString()===sid).inputFields = filteredschemaInputFields;

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not delete input field');
        res.status(200).json({message: `successfully deleted input field`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}