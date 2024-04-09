import HttpService from "../../services/httpService";
import * as actionTypes from "../constants/moviesConstant";
const authService = new HttpService({ service: "/new-movie" });





export const getMoviesfromAction = () => async (dispatch) => {
    try {
        const data = await authService.get("");
        const movies = Object.values(data).slice(0, -1);

        dispatch({
            type: actionTypes.GET_MOVIES_SUCCESS,
            payload: movies
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MOVIES_FAIL,
            payload: error.response?.data || { message: "Something went wrong." }
        })
    }
}

