import dataModel from "../models/dataModel.js";

export const returnUserData = async(email) => {
    try {
        const foundUsers = await dataModel.find({ email });
        if(!foundUsers) throw Error('could not find user');
        return foundUsers;
    } catch (error) {
        return {};
    }
}