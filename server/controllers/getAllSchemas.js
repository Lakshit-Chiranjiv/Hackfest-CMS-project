import { returnUserData } from "./returnUserData.js";

export const getAllSchemas = async(req,res) => {
    const { email,pid } = req.params;
    try {
        const foundUser = returnUserData(email);
        const selectedProject = foundUser.projects.find(project => project.projectId===pid)
        const allSchemas = selectedProject.schemas;
        if(!allSchemas) throw Error('cannot get due to some server error');
        res.status(200).json(allSchemas);
    } catch (error) {
        res.status(400).json({message: error});
    }
}