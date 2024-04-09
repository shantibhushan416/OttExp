import Movies from "../model/moviesSchema.js";
import Genre from "../model/genreSchema.js";

export async function postMovies(req, res) {

    const { title, genre, numberInStock, dailyRentalRate, rating } = req.body;
    console.log(req.body);
    if (!title || !genre || !numberInStock || !dailyRentalRate || !rating) return res.status(400).send('All fields are required');

    let movies = await Movies.findOne({ title: req.body.title });
    if (movies) return res.status(400).send('Movies already exists.');

    const genres = await Genre.findById(genre);
    if (!genres) return res.status(400).send('Genre does not exist.');

    movies = new Movies({ title, genre: genres, numberInStock, dailyRentalRate, rating });

    await movies.save();
    res.status(200).send({ message: 'Movie saved successfully', movies });


};

export async function getMovies(req, res) {
    const movies = await Movies.find({});
    res.status(200).send(movies);
};

export async function getMovieById(req, res) {
    const movie = await Movies.findById(req.params.id);
    res.status(200).send({ message: "found successFully", movie });
};