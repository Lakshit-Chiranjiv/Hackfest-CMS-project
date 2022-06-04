import dataModel from "../models/dataModel.js";
import { returnUserData } from "./returnUserData.js";

export const getUserData = async(req,res) => {
    const { email } = req.params;
    try {
        const foundUser = returnUserData(email);
        if(!foundUser) throw Error('could not find user');
        res.status(200).json(foundUser);
    } catch (error) {
        res.status(400).json({message: error});
    }
}