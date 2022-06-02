import mongoose from "mongoose";

const customSchemaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    inputFields: {
        type: [mongoose.Types.ObjectId],
        required: false
    }
});

const customSchemaModel = mongoose.model('customschemas',customSchemaSchema);

export default customSchemaModel;