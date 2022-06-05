import mongoose from "mongoose";
import { projectSchema } from "./projectSchema.js";

const dataSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    projects: {
        type: [projectSchema],
        required: false
    }
});

const dataModel = mongoose.model('datas',dataSchema);

export default dataModel;