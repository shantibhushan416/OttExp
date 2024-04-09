import mongoose from 'mongoose';

const newMovieSchema = new mongoose.Schema({
    Title: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },

    Year: {
        type: String,
        required: [true, 'Year is required']
    },
    Released: {
        type: String,
        required: [true, 'runtime is required']
    },
    Runtime: {
        type: String,
        required: [true, 'runtime is required']
    },
    Genre: {
        type: String,
        required: [true, 'genre is required']
    },
    Director: {
        type: String
    },
    Actors: {
        type: String
    },

    Plot: {
        type: String
    },
    Language: { type: String },
    Country: { type: String },
    Awards: { type: String },
    Poster: { type: String },


})

const newMovie = mongoose.model('newmovies', newMovieSchema);

export default newMovie;

