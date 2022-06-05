import dataModel from "../models/dataModel.js";
import { returnUserById } from './returnUserById.js'

export const deleteProject = async(req,res) => {
    const { id,pid } = req.params;
    let allProjects;
    let foundUser;

    try {
        foundUser = returnUserById(id);
        allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }

    const newProjectList = allProjects.filter(project => project.projectId!==pid)
    const newUser = {...foundUser,projects: newProjectList};

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,newUser);
        if(!updatedUser) throw Error('could not delete project');
        res.status(200).json({message: `successfully deleted project`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}