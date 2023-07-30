import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Link } from "react-router-dom";

const LogReg = (props) => {
    return (
        <div className="log-reg-container">
            <Link to={"/"}>Home</Link>

            <Login />
            <br></br>
            <Register />
        </div>
    );
};

export default LogReg;
