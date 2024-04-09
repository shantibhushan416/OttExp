import mongoose from "mongoose";


const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
        required: true,
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
}, { timestamps: true });

const movies = mongoose.model("movies", moviesSchema);

export default movies;