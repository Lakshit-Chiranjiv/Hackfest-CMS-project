import mongoose from "mongoose";
import { customSchemaSchema } from "./customSchemaSchema.js";

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
        required: false
    },
    lastUpdated: {
        type: Date,
        required: false
    },
    banner: {
        type: String,
        required: false
    },
    schemas: {
        type: [customSchemaSchema],
        required: false
    }
});
