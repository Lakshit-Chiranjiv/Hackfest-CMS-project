import dataModel from "../models/dataModel.js";

export const returnUserData = async(id) => {
    try {
        const foundUser = await dataModel.find({ _id: id });
        if(!foundUser) throw Error('could not find user');
        return foundUser;
    } catch (error) {
        return {};
    }
}