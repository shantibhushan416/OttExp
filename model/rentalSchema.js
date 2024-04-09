import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
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

        }),
        required: true,
    },

    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                min: 5,
                max: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
            }
        }),
        required: true,
    }
}, { timestamps: true });


const rental = mongoose.model("rental", rentalSchema);

export default rental;