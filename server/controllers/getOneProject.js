import projectModel from "../models/projectModel.js";

export const getOneProject = async(req,res) => {
    const { email,id } = req.params;
    try {
        const foundUser = returnUserData(email);
        const foundProject = foundUser.projects.find(project => project.projectId===id);
        if(!foundProject) throw Error('could not find project');
        res.status(200).json(foundProject);
    } catch (error) {
        res.status(400).json({message: error});
    }
}