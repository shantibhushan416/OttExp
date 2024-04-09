import HttpService from "./httpService";

const authService = new HttpService({ service: "/new-movie" });


export const getMovies = async () => {
    const response = await authService.get("",);
    console.log(response);
    return response;
}