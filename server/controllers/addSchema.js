import dataModel from "../models/dataModel.js";
import { returnUserById } from './returnUserById.js'

export const addSchema = async(req,res) => {
    const { id,pid } = req.params;
    let foundUser;

    try {
        const foundUsers = await returnUserById(id);
        foundUser = foundUsers[0];
        if(!foundUser) throw Error('cannot get user due to some server error');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    foundUser.projects.find(project => project.projectId.toString()===pid).schemas.push(req.body);

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not add schema');
        res.status(200).json({message: `successfully added schema : ${req.body.name}`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}