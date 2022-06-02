import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
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
    applicationSchemas: {
        type: [mongoose.Types.ObjectId],
        required: false
    }
});

const applicationModel = mongoose.model('applications',applicationSchema);

export default applicationModel;