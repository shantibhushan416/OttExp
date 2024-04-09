import express from "express";
import { LoginUser, SignUpUser } from "../controller/auth-controller.js";
import { getCustomerById, postCustomers, updateCustomerById } from "../controller/customer-controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getGenreById, getGenres, postGenre } from "../controller/genre-controller.js";
import { asyncMiddleware } from "../middlewares/async.js";
import { getMovieById, getMovies, postMovies } from "../controller/movies-controller.js";
import { postRental } from "../controller/rental-controller.js";
import { getNewMovie } from "../controller/newMovie-controller.js";






const routes = express.Router();


{/*---------- User SignUp -----------------------------*/ }
routes.post("/user/signup", SignUpUser);
routes.post("/user/login", LoginUser);


{/*---------- Customer -----------------------------*/ }
routes.post("/customer", authMiddleware(), postCustomers);
routes.get("/customer/:id", asyncMiddleware(getCustomerById));
routes.put("/customer/:id", updateCustomerById)

{/*-----Genre -------------*/ }

routes.post("/genre", postGenre);
routes.get("/genre", getGenres);
routes.get("/genre/:id", getGenreById);



{/*-----------------Movies -------------------------------*/ }

routes.post("/movies", asyncMiddleware(postMovies));
routes.get("/movies", asyncMiddleware(getMovies));
routes.get("/movies/:id", asyncMiddleware(getMovieById));

{/*----------------------Rental----------------------------*/ }

routes.post("/rental", asyncMiddleware(postRental));

{ /*---------------- New Movie ------------------------------*/ }

routes.get("/new-movie", authMiddleware(), asyncMiddleware(getNewMovie));

export default routes
getMovies