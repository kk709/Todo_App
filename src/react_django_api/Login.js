// 'use client'

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
} from '@chakra-ui/react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './Login.css';


const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const resposne = await fetch('http://localhost:7000/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            })
        });

        if (resposne.ok) {
            const data = await resposne.json();
            const jwtToken = data.jwt; // Extract the JWT token from the response data

            // Store the token in localStorage
            localStorage.setItem('jwt', jwtToken);

            // Optionally, you can also update your component's state to indicate successful login
            setRedirect(true);
        } else {
            // Handle authentication error (e.g., incorrect password or user not found)
            console.error('Authentication failed');
        }
    }

    if (redirect) {
        return window.location.href = '/detail';
    }

    // const url = "http://localhost:7000/login/"

    // const sinIn = async () => {

    //     try {
    //         const response = await Axios.post(url, userData);
    //         const { jwt } = response.data;

    //         // Store the JWT token securely (e.g., in localStorage)
    //         localStorage.setItem('token', jwt);

    //         // Redirect to a protected route or update the UI as needed
    //     } catch (error) {
    //         // Handle login error (display error message, etc.)
    //         console.error('Login failed:', error);
    //     }

    // console.log({
    //     email: userData.email,
    //     password: userData.password,
    // })

    return (
        <section className="vh-90 mt-5">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample pic" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={submit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            </div><br />

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input type="email" className="form-control form-control-lg" name="email" onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter a valid email address" />
                                <label className="form-label">Email address</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg" name="email" onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password" />
                                <label className="form-label">Password</label>
                            </div>

                            {/* <div className="d-flex justify-content-between align-items-center">
                                <!-- Checkbox -->
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="#!" className="text-body">Forgot password?</Link>
                            </div> */}

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/@"
                                    className="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <!-- Copyright -->
                <div class="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                <!-- Copyright -->

                <!-- Right -->
                <div>
                    <Link to="#!" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#!" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </Link>
                    <Link to="#!" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </Link>
                    <Link to="#!" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </Link>
                </div>
                <!-- Right -->
            </div> */}
        </section>
    )
}

export default Login;