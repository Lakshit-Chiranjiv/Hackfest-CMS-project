import { returnUserData } from "./returnUserData.js";

export const getUserData = async(req,res) => {
    const { email } = req.params;
    try {
        const foundUsers = await returnUserData(email);
        const foundUser = foundUsers[0];
        if(!foundUser) throw Error('could not find user');
        res.status(200).json(foundUser);
    } catch (error) {
        res.status(400).json({message: error});
    }
}