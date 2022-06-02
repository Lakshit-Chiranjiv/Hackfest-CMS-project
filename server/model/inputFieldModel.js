import mongoose from "mongoose";

const inputFieldSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    inputType: {
        type: Enumerator,
        required: true
    }
});

const inputFieldModel = mongoose.model('inputFields',inputFieldSchema);

export default inputFieldModel;