import { returnUserById } from "./returnUserById.js";

export const deleteSchemaData = async(req,res) => {
    const { id,pid,sid,did } = req.params;

    let foundUser;
    let schemaData;
    try {
        const foundUsers = await returnUserById(id);
        foundUser = foundUsers[0];
        const selectedProject = foundUser.projects.find(project => project.projectId.toString()===pid)
        const selectedSchema = selectedProject.schemas.find(schema => schema.schemaId.toString()===sid);
        schemaData = selectedSchema.data;
        if(!schemaData) throw Error('cannot get due to some server error');
    } catch (error) {
        res.status(400).json({message: error.message});
    }

    const filteredSchemaData = schemaData.filter(data => data.dataId.toString()!==did);

    foundUser.projects.find(project => project.projectId.toString()===pid).schemas.find(schema => schema.schemaId.toString()===sid).data = filteredSchemaData;

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not delete data');
        res.status(200).json({message: `successfully deleted data`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}