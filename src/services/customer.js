import { toast } from 'react-toastify';
import { routes } from '../routes/Routes';
import HttpService from "./httpService";

const authService = new HttpService({ service: "/customer" });


export const postCustomers = async (data) => {
    const response = await authService.post("", data);
    console.log(response);
    if (response.statusCode === 200) {
        toast("successfully made profile.")
        // window.location.href = routes.main.element;

    }
    else {
        toast("Incorrect Id Password")
    }

}
