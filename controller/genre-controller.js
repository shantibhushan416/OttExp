import _ from "lodash";
import Genre from "../model/genreSchema.js";


export const postGenre = async (req, res) => {
    try {
        let genre = await Genre.findOne({ name: req.body.name });
        if (genre) return res.status(400).send('Genre already exists.');

        genre = new Genre(_.pick(req.body, ["name"]));
        await genre.save();

        res.status(200).send(genre);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }

}

export const getGenres = async (req, res) => {
    try {
        const genre = await Genre.find({});
        res.status(200).send(genre);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
};

export const getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        res.status(200).send({ message: "found successfully", genre });
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
};
