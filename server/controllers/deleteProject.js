import dataModel from "../models/dataModel.js";
import { returnUserData } from "./returnUserData.js";

export const deleteProject = async(req,res) => {
    const { id } = req.params;
    let allProjects;

    try {
        const foundUser = returnUserData(email);
        allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }

    const newProjectList = allProjects.filter(project => project.projectId!==id)

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,newProjectList);
        if(!updatedUser) throw Error('could not delete project');
        res.status(200).json({message: `successfully deleted project`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}