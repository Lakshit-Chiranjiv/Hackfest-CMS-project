import { returnUserById } from "./returnUserById.js";

export const addSchemaData = async(req,res) => {
    const { id,pid,sid } = req.params;

    let foundUser;
    try {
        const foundUsers = await returnUserById(id);
        foundUser = foundUsers[0];
        if(!foundUser) throw Error('cannot get user due to some server error');
    } catch (error) {
        res.status(400).json({message: error});
    }

    foundUser.projects.find(project => project.projectId===pid).schemas.find(schema => schema.schemaId===sid).data.push(req.body);

    try {
        const updatedUser = await dataModel.findByIdAndUpdate(id,foundUser);
        if(!updatedUser) throw Error('could not add data');
        res.status(200).json({message: `successfully created data`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}