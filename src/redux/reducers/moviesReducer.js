import * as actionTypes from "../constants/moviesConstant";

export const getMoviesReducer = (state = { movies: [] }, action) => {
    switch (action.type) {

        case actionTypes.GET_MOVIES_SUCCESS:
            return { movies: action.payload };

        case actionTypes.GET_MOVIES_FAIL:
            return action.payload;
        default:
            return state;
    }
}