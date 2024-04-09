import { useState } from 'react';
import { signUp } from '../../services/auth';
import { Box, Card, TextField } from "@mui/material"
import "./auth.css"

const SignUpPage = () => {
    const initialState = {
        name: "",
        email: "",
        password: ''
    };

    const [values, setValues] = useState(initialState);

    const handleChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(values)
    }


    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Card className='container' sx={{ width: 800, height: 480, display: "flex", flexDirection: "row", background: "var(--cardColor)", boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22)" }}>


                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", background: "var(--primaryColor)" }}>

                    <h1 style={{ color: "var(--cardColor)" }}>Hello, Friend!</h1>
                    <p style={{ width: "70%", color: "var(--cardColor)" }}>Enter your personal details and start journey with us.</p>

                    <h1 style={{ color: "var(--cardColor)" }}>Create Account</h1>
                    {/* <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div> */}
                    <p style={{ color: "var(--secondryColor)" }}>Or</p>
                    <button class="ghost" id="signUp">Sign In</button>


                </Box>

                <Box sx={{ width: "50%", background: "var(--cardColor)" }}>

                    <form onSubmit={handleSubmit}>
                        <h1 style={{ marginBottom: "1rem" }}>Sign Up</h1>
                        <Box >
                            <TextField
                                sx={{ mb: 1.5, width: 300, background: "#eee" }}
                                type="text"
                                label="Name"
                                size="small"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </Box>

                        <Box >
                            <TextField
                                sx={{ mb: 1.5, width: 300, background: "#eee" }}
                                type="email"
                                label="Email"
                                size="small"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box >
                            <TextField
                                sx={{ mb: 3, width: 300, background: "#eee" }}
                                type="text"
                                label="Password"
                                size="small"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Box>
                        {/* <Typography sx={{ mb: 1.5 }}>Forgot your password?</Typography> */}

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <button type="submit" >Sign Up</button>
                        </Box>

                    </form>


                </Box>
            </Card >

        </Box >
    )
}

export default SignUpPage
