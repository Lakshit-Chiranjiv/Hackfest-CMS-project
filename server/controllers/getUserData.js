import dataModel from "../models/dataModel.js";

export const getUserData = async(req,res) => {
    const { email } = req.params;
    try {
        const foundUser = await dataModel.find({ email });
        if(!foundUser) throw Error('could not find user');
        res.status(200).json(foundUser);
    } catch (error) {
        res.status(400).json({message: error});
    }
}