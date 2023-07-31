import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [resbody, setResBody] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/api/creators/login", {
            //send email and password in either query or param
            method: "POST", //we are posting data to create cookie with JWT token inside then we expect confirmation that this user exists
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((userData) => userData.json()) //res is studioId
            .then((userData) => {
                //then using the studioName, we will send a
                // setResBody(userData);
                // console.log(resbody.message);
                console.log(
                    userData,
                    "SUCCESSFULLY CREATED NEW USER!!LOG IN NOW!!"
                );
            })
            .then((res) => {
                console.log("save into state?"); //i think we have to pass this user data (the video data)
                navigate("/");
            })
            .catch((err) => {
                console.log(
                    "An error occurred while POSTING new user info: ",
                    err
                );
            });
    };

    return (
        <div>
            <h1 className="text-center">Login</h1>
            <p className="error-text">{errorMessage ? errorMessage : ""}</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="text-center row justify-content-center mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        className="w-25"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="row justify-content-center mb-3">
                    <FormLabel className="text-center">Password</FormLabel>
                    <FormControl
                        className="w-25"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="text-center">
                    <Button className="text-center" type="submit">
                        Sign In
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
