import NewMovie from "../model/newMovies.js";


export const getNewMovie = async (req, res) => {

    const newMovie = await NewMovie.find({});
    res.json(newMovie);

};