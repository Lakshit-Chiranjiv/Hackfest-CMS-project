import projectModel from "../models/projectModel.js";

export const getOneProject = async(req,res) => {
    const { id } = req.params;
    try {
        const foundProject = await projectModel.findById(id);
        if(!foundProject) throw Error('could not find project');
        res.status(200).json(foundProject);
    } catch (error) {
        res.status(400).json({message: error});
    }
}