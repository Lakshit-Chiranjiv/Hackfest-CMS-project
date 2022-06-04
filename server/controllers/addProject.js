import dataModel from "../models/dataModel.js";
import { returnUserData } from "./returnUserData.js";

export const addProject = async(req,res) => {
    const { id } = req.params;
    let allProjects;
    let foundUser;

    try {
        foundUser = returnUserData(email);
        allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }

    const newUser = {...foundUser,projects: [...allProjects,req.body]}

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,newUser);
        if(!updatedUser) throw Error('could not add project');
        res.status(200).json({message: `successfully added project : ${req.body.name}`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}