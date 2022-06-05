import dataModel from "../models/dataModel.js";

export const returnUserById = async(id) => {
    try {
        const foundUsers = await dataModel.find({ _id: id });
        if(!foundUsers) throw Error('could not find user');
        return foundUsers;
    } catch (error) {
        return {};
    }
}