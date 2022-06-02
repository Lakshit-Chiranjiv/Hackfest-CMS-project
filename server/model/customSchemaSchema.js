import mongoose from "mongoose";
import { inputFieldSchema } from "./inputFieldSchemaa";

export const customSchemaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    inputFields: {
        type: [inputFieldSchema],
        required: false
    }
});
