import { lazy } from "react";
const Customer2 = lazy(() => import("../pages/Customer2"));

const Main = lazy(() => import("../Main"));
const SignUpPage = lazy(() => import("../component/auth/SignUpPage"));

const SignInPage = lazy(() => import("../component/auth/SignInPage"));





export const routes = {
    main: {
        path: "/",
        element: Main,
    },
    home: {
        path: "/home",
    },
    invalid: {
        path: "/*"
    },
    signin: {
        path: "/user/login",
        element: SignInPage
    },
    signup: {
        path: "/user/signup",
        element: SignUpPage
    },
    customer: {
        path: "/user/customer",
        element: Customer2
    }
    // view: {
    //     path: "/view",
    //     element: ViewEmails,
    // },
};