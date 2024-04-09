import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";

const userSchema = new mongoose.Schema({

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
        unique: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 255
    }
}, { timestamps: true });

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
    }, config.get("jwtPrivateKey"));
    return token;
}

const user = mongoose.model("OttUser", userSchema);
export default user;