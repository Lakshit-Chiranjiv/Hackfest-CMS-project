import { loadAllEndpoints } from "../index.js";
import { returnUserData } from "./returnUserData.js";

export const getAllProjects = async(req,res) => {
    const { email } = req.params;
    loadAllEndpoints(email);
    
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        const allProjects = foundUser.projects;
        if(!allProjects) throw Error('cannot get due to some server error');
        res.status(200).json(allProjects);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}