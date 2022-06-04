import dataModel from "../models/dataModel.js";

export const getUserData = async(email) => {
    try {
        const foundUser = await dataModel.find({ email });
        if(!foundUser) throw Error('could not find user');
        return foundUser;
    } catch (error) {
        return {};
    }
}