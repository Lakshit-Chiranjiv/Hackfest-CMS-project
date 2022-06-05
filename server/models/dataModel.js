import mongoose from "mongoose";
import { projectSchema } from "./projectSchema.js";

const dataSchema = mongoose.Schema({
    email: {
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

const dataModel = mongoose.model('data',dataSchema);

export default dataModel;