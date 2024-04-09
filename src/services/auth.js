import { toast } from 'react-toastify';
import { routes } from '../routes/Routes';
import HttpService from "./httpService";

const authService = new HttpService({ service: "/user" });


export const signUp = async (data) => {
    const response = await authService.post("/signup", data);
    console.log(response);
    if (response.statusCode === 200) {
        toast("successfully signed up.")
        localStorage.setItem("accessToken", response.token);
        window.location.href = routes.main.element;

    }
    else {
        toast("Incorrect Id Password")
    }

}

export const signIn = async (data) => {

    const response = await authService.post("/login", data);
    console.log(response);
    if (response.statusCode === 200) {
        toast("successfully signed in.")
        localStorage.setItem("accessToken", response.token);
        window.location.href = routes.main.element;

    }
    else {
        toast("Incorrect Id Password")
    }
}