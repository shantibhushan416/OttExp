import NewMovie from "./model/newMovies.js";
import { movies } from "./constants/movies.js";

const DefaultData = async () => {
    try {

        await NewMovie.insertMany(movies);

        console.log('Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default DefaultData;