import { returnUserData } from "./returnUserData.js";

export const getOneSchema = async(req,res) => {
    const { email,pid,sid } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId.toString()===sid);
        if(!selectedSchema) throw Error('cannot get due to some server error');
        res.status(200).json(selectedSchema);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}