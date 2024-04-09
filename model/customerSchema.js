import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    isGold: {
        type: Boolean,
        default: false
    }
}, { timeseries: true });

const customer = mongoose.model('customer', customerSchema);

export default customer;