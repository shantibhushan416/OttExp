import React, { useEffect, useState } from 'react'
import SlideBanner from './SlideBanner';
import { Box, Card, Grid, Skeleton, Typography } from '@mui/material'
import { getMovies } from '../../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesfromAction } from '../../redux/actions/moviesActions';

const Body = ({ search }) => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    const { movies } = useSelector(state => state.getMovies);


    const dispatch = useDispatch()

    useEffect(() => {
        getNewMovies()
        dispatch(getMoviesfromAction())
    }, [dispatch]);


    const getNewMovies = async () => {
        const response = await getMovies();
        if (response.statusCode === 200) {
            const movies = Object.values(response).slice(0, -1);
            setData(movies);
            setFilter(movies);
            setLoading(false)
        }
    }


    useEffect(() => {
        if (search) {
            const result = data.filter((item) => { return item.Genre?.toLowerCase().match(search?.toLowerCase()) || item.Title?.toLowerCase().match(search?.toLowerCase()) || item.Actors?.toLowerCase().match(search?.toLowerCase()) });
            setFilter(result)
        }
        else {
            setFilter(movies)
        }

    }, [search])





    return (
        <Box sx={{
            marginTop: "65px", background: "var(--tertiaryColor)", height: "100%"
        }}>
            <SlideBanner />
            <Grid container spacing={{ xs: 2 }} style={{ marginTop: 10 }}>

                {(loading ? Array.from(new Array(25)) : filter).map((movie, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={2.4} key={index} sx={{ display: "flex", justifyContent: 'center' }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", height: "100%" }}>
                            {movie ? (
                                <img src={movie.Poster} alt='poster' style={{ width: 250, height: 350, borderRadius: 5 }} />
                            ) : (
                                <Skeleton variant="rectangular" width={250} height={350} sx={{ borderRadius: 2, background: "#4c4c4c" }} />
                            )}
                            {movie ? (<Typography sx={{ color: "var(--secondryColor)" }}>{movie.Title}</Typography>)
                                : (
                                    <Box sx={{ pt: 0.5 }}>
                                        {/* <Skeleton sx={{ background: "#4c4c4c" }} /> */}
                                        <Skeleton width="200px" sx={{ background: "#4c4c4c" }} />
                                    </Box>
                                )}

                        </Box>
                        {/* <Card sx={{ width: 250, height: 400, background: "var(--tertiaryColor)" }}></Card> */}
                    </Grid>
                ))}
            </Grid>
        </Box >

    )
}

export default Body