import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:7000/api",
});

axiosInstance.interceptors.request.use((request) => {
    request.headers.Authorization = `${localStorage.getItem("accessToken")}`;
    return request;
});

axiosInstance.interceptors.response.use(
    (res) => {
        return { ...res, data: { ...res.data, statusCode: res.status } };
    },
    (error) => {
        const { status } = error?.response;
        if (status === 401) {
            ///
        }

        if (status < 400 || status >= 500) {
            console.log("An unexpected error", error);
        }

        return Promise.reject(error);
    }
);

const tryCatchWrapper = async (axiosObject) => {
    try {
        const { data } = await axiosInstance(axiosObject);
        return data;
    } catch (error) {
        return error?.response?.data || { message: "Something went wrong." };
    }
};

class HttpService {
    #service = "";

    constructor({ service }) {
        this.#service = service;
    }

    get(url = "", params) {
        return tryCatchWrapper({ method: "GET", url: `${this.#service}${url}`, params });
    }

    post(url = "", body) {
        return tryCatchWrapper({ method: "POST", url: `${this.#service}${url}`, data: body });
    }

    put(url = "", body) {
        return tryCatchWrapper({ method: "PUT", url: `${this.#service}${url}`, data: body });
    }

    patch(url = "", body) {
        return tryCatchWrapper({ method: "PATCH", url: `${this.#service}${url}`, data: body });
    }

    delete(url = "", params) {
        return tryCatchWrapper({ method: "DELETE", url: `${this.#service}${url}`, params });
    }
}

export default HttpService;