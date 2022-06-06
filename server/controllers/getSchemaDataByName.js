import { returnUserData } from "./returnUserData.js";

export const getSchemaDataByName = async(req,res) => {
    const { email,pid,sname } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.name===sname);
        const schemaData = selectedSchema.data;
        if(!schemaData) throw Error('cannot get due to some server error');
        res.status(200).json(schemaData);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}