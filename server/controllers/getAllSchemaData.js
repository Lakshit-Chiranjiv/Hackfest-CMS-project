import { returnUserData } from "./returnUserData.js";

export const getAllSchemaData = async(req,res) => {
    const { email,pid,sid } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId===sid);
        const schemaData = selectedSchema.data;
        if(!schemaData) throw Error('cannot get due to some server error');
        res.status(200).json(schemaData);
    } catch (error) {
        res.status(400).json({message: error});
    }
}