import { returnUserById } from "./returnUserById.js";

export const getSingleDataInstance = async(req,res) => {
    const { id,pid,sid,did } = req.params;
    try {
        const foundUser = returnUserById(id);
        const selectedProject = foundUser.projects.find(project => project.projectId===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId===sid);
        const schemaData = selectedSchema.data;
        const selectedData = schemaData.find(data => data.dataId===did)
        if(!selectedData) throw Error('cannot get due to some server error');
        res.status(200).json(selectedData);
    } catch (error) {
        res.status(400).json({message: error});
    }
}