import dataModel from "../models/dataModel.js";
import { returnUserData } from "./returnUserData.js";

export const getAllProjects = async(req,res) => {
    const { email } = req.params;
    try {
        const foundUser = returnUserData(email);
        const allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
        res.status(200).json(allProjects);
    } catch (error) {
        res.status(400).json({message: error});
    }
}