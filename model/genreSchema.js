import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 255
    }
}, { timeseries: true });


const genre = mongoose.model('genre', genreSchema);
export default genre;