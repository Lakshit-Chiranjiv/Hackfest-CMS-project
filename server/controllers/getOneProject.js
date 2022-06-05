import { returnUserData } from "./returnUserData.js";

export const getOneProject = async(req,res) => {
    const { email,id } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const foundProject = foundUser.projects.find(project => project.projectId.toString()===id);
        if(!foundProject) throw Error('could not find project');
        res.status(200).json(foundProject);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}