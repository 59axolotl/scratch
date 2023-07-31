import { react, useState, useEffect } from "react";
import { Form, FormControl, FormLabel, Button } from "react-bootstrap";

import React from "react";

const Register = (props) => {
  const [confirmReg, setConfirmReg] = useState("");
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    studio: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //FETCH FROM DB
  const handleRegister = () => {
    fetch("/api/creators/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // setUser(...newAccountInfo);
        console.log("SUCCESSFULLY CREATED NEW USER!!LOG IN NOW!!");
      })
      .then((res) => {
        setUser({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          studio: "",
        });
        setConfirmReg("Thank you for registering, you can now log in.");
        setErrors({}); //resetting error state if it was successful
      })
      .catch((err) => {
        console.error("An error occurred while POSTING new user info: ", err);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      {confirmReg ? <h4 style={{ color: "green" }}>{confirmReg}</h4> : null}
      <form onSubmit={handleRegister}>
        <Form.Group className="row justify-content-center mb-3">
          <FormLabel>Username</FormLabel>
          {errors.username ? (
            <span className="error-text">{errors.username.message}</span>
          ) : null}
          <FormControl
            className="w-25"
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="row justify-content-center mb-3">
          <FormLabel>Email</FormLabel>
          {errors.email ? (
            <span className="error-text">{errors.email.message}</span>
          ) : null}
          <FormControl
            className="w-25"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="row justify-content-center mb-3">
          <FormLabel>Password</FormLabel>
          {errors.password ? (
            <span className="error-text">{errors.password.message}</span>
          ) : null}
          <FormControl
            className="w-25"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="row justify-content-center mb-3">
          <FormLabel>Confirm Password</FormLabel>
          {errors.confirmPassword ? (
            <span className="error-text">{errors.confirmPassword.message}</span>
          ) : null}
          <FormControl
            className="w-25"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="row justify-content-center mb-3">
          <FormLabel>Studio</FormLabel>
          {errors.studio ? (
            <span className="error-text">{errors.studio.message}</span>
          ) : null}
          <FormControl
            className="w-25"
            type="text"
            name="studio"
            value={user.studio}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="center">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
