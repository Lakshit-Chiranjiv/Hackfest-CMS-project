import { returnUserById } from "./returnUserById.js";

export const getSingleDataInstance = async(req,res) => {
    const { id,pid,sid,did } = req.params;
    try {
        const foundUsers = await returnUserById(id);
        const foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId.toString()===sid);
        const schemaData = selectedSchema.data;
        const selectedData = schemaData.find(data => data.dataId.toString()===did)
        if(!selectedData) throw Error('cannot get due to some server error');
        res.status(200).json(selectedData);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}