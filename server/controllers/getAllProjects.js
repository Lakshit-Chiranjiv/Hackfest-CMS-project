import projectModel from "../models/projectModel.js";

export const getAllProjects = async(req,res) => {
    try {
        const allProjects = await projectModel.find();
        if(!allProjects) throw Error('cannot get due to some server error');
        res.status(200).json(allProjects);
    } catch (error) {
        res.status(400).json({message: error});
    }
}