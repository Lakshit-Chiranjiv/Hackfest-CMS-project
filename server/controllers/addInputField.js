import { returnUserById } from './returnUserById.js'
import dataModel from "../models/dataModel.js";

export const addInputField = async(req,res) => {
    const { id,pid,sid } = req.params;
    let foundUser;
    try {
        const foundUsers = await returnUserById(id);
        const foundUser = foundUsers[0];
        if(!foundUser) throw Error('cannot get user due to some server error');
    } catch (error) {
        res.status(400).json({message: error.message});
    }

    foundUser.projects.find(project => project.projectId.toString()===pid).schemas.find(schema => schema.schemaId.toString()===sid).inputFields.push(req.body);

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not add input field');
        res.status(200).json({message: `successfully added input field : ${req.body.name}`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}