import { useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom"
import { signIn } from '../../services/auth';
import { Box, Card, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import "./auth.css"
import { routes } from '../../routes/Routes';

const SignInPage = () => {

    const initialState = {
        email: "",
        password: ''
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const [values, setValues] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value });
        console.log(values)
    }

    const onSubmit = async () => {
        await signIn(values)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (





        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Card className='container' sx={{ width: 800, height: 480, display: "flex", flexDirection: "row", background: "var(--cardColor)", boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22)" }}>


                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", background: "var(--primaryColor)" }}>

                    <h1 style={{ color: "var(--cardColor)" }}>Welcome Back!</h1>
                    <p style={{ width: "70%", color: "var(--cardColor)" }}>To keep connected with us please login with your personal info.</p>
                    <p style={{ color: "var(--secondryColor)" }}>Or</p>
                    <NavLink sx={{}} to={routes.signup.path}> <button class="ghost" id="signIn">Sign Up</button></NavLink>


                </Box>
                <Box sx={{ width: "50%" }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 style={{ marginBottom: "1rem" }}>Sign in</h1>
                        <Box sx={{ mb: 3 }}>
                            <TextField
                                sx={{ width: 300, background: "#eee" }}
                                type="email"
                                label="Email"
                                size="small"
                                name="email"

                                {...register("email", {
                                    required: true,
                                    maxLength: 255,
                                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                                    // pattern: /^[A-Za-z]+$/i,
                                })}

                                value={values.email}
                                onChange={handleChange}
                            />

                            {errors?.email?.type === "required" && <p className='errorP'>This field is required</p>}
                            {errors?.email?.type === "maxLength" && (
                                <p class="errorP">First name cannot exceed 20 characters</p>
                            )}
                            {errors?.email?.type === "pattern" && (
                                <p class='errorP'>Invalid email pattern</p>
                            )}
                        </Box>
                        <Box sx={{ mb: 1.5 }}>


                            {/* <TextField
                                sx={{ width: 300, background: "#eee" }}

                                type="password"
                                label="Password"
                                size="small"
                                name="password"

                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i
                                    // pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                                    // pattern: /^[A-Za-z]+$/i,
                                })}

                                value={values.password}
                                onChange={handleChange}
                            >
                                { }
                            </TextField> */}



                            <OutlinedInput
                                sx={{ width: 300, background: "#eee" }}
                                // id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                size="small"
                                name="password"

                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i
                                    // pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                                    // pattern: /^[A-Za-z]+$/i,
                                })}

                                value={values.password}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }


                            />


                            {errors?.password?.type === "required" && <p className='errorP'>This field is required</p>}
                            {errors?.password?.type === "minLength" && (
                                <p class="errorP"> Password must be 8 characters</p>
                            )}
                            {errors?.password?.type === "maxLength" && (
                                <p class="errorP">Password cannot exceed 20 characters</p>
                            )}
                            {errors?.password?.type === "pattern" && (
                                <p class='errorP'>Password must contain special characters</p>
                            )}
                        </Box>
                        <Typography sx={{ mb: 1.5 }}>Forgot your password?</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <button type="submit" >Sign In</button>
                        </Box>

                    </form>


                </Box>
            </Card >

        </Box >
    )
}

export default SignInPage
