import { returnUserData } from "./returnUserData.js";

export const getAllSchemas = async(req,res) => {
    const { email,pid } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const allSchemas = selectedProject.schemas;
        if(!allSchemas) throw Error('cannot get due to some server error');
        res.status(200).json(allSchemas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}