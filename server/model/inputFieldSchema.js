import mongoose from "mongoose";

export const inputFieldSchema = mongoose.Schema({
    fieldId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        enum: ['smallText','radio','select','longText','date','image'],
        required: true
    }
});