import mongoose from "mongoose";
import { customSchemaSchema } from "./customSchemaSchema";

export const projectSchema = mongoose.Schema({
    projectId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    lastUpdated: {
        type: Date,
        required: true
    },
    banner: {
        type: Image,
        required: false
    },
    schemas: {
        type: [customSchemaSchema],
        required: false
    }
});
