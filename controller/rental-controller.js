import Fawn from 'fawn';
import Rental from "../model/rentalSchema.js";
import Customer from "../model/customerSchema.js";
import Movies from "../model/moviesSchema.js";


export async function postRental(req, res) {

    let customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Customer does not exist.');


    let movie = await Movies.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Movie does not exist.');


    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            email: customer.email
        },

        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });

    rental = await rental.save();
    movie.numberInStock--;
    movie.save();

    res.status(200).send({ message: "Rental created successfully", rental });
    // try {
    //     new Fawn.Task()
    //         .save('rental', rental)
    //         .update('movies', { _id: movie._id }, { $inc: { numberInStock: -1 } })
    //         .run();
    //     res.status(200).send({ message: "Rental updated successfully", rental });
    // } catch (error) {
    //     res.status(500).send('Something failed.');
    // }



}