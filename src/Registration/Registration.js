import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
import { Redirect, Link } from "react-router-dom";
import { registerValidation } from "../Validation/RegisterValidation";
import axios from "axios";
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [user, setUser] = useState({
    // stores current inputs values
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorsMessage, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState(); // final success message
  //onChange ******************************************************************************************************************************
  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  //onSubmit ******************************************************************************************************************************
  const handleOnSubmit = () => {
    console.log("Current inputs:");
    console.log(JSON.stringify(user));
    let validation = registerValidation(user);
    setErrors(validation);
    console.log("Validation returned:");
    console.log(JSON.stringify(validation));
    if (validation.success) {
      const User = {
        username: user.userName,
        email: user.email,
        password: user.password,
        fullname: user.name + " " + user.lastName,
      };
      axios
        .post("http://localhost:3010/users/register", User, {
          withCredentials: true,
        })
        .then((RegisteredUser) => {
          let msg = (
            <p style={{ color: "green" }}>
              You are now registered! <br /> Redirecting you to Login...
            </p>
          );
          setStatus(msg);
          console.log(RegisteredUser);
          setTimeout(() => setRedirect(true), 2000);
          // to redirect to /login
        })
        .catch((err) => {
          // Set error message: "something went wrong"
          console.log("Server error", err);
          let msg = (
            <p style={{ color: "red" }}>
              Something went wrong. Please try again.
            </p>
          );
          setStatus(msg);
        });
    } else {
      let msg = <p style={{ color: "red" }}>Please check your inputs!</p>;
      setStatus(msg);
    }
  };

  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <div className={styles.Global}>
      <div className={styles.Information}>
        <p id={styles.Title}>What is GEEB?</p>
        <div>
          <p id={styles.WhatIs}>
            GEEB is a platform dedicated to all kinds of creators, leaders and
            entrepreneurs.
          </p>
          <ul>
            <li>
              Explore open projects and apply to work with interdisciplinary
              groups of people.
            </li>
            <li>
              Find collaborators and build the ideal team for your own ventures.
            </li>
            <li>
              Show off your past work and skills with your own online Portfolio.
            </li>
          </ul>

          <p id={styles.Msg}>
            Ready to accelerate your career, make valuable connections and make
            your project ideas come to life?
          </p>
        </div>
      </div>

      <div className={styles.Inputs}>
        <p id={styles.InputMsg}>Register now</p>
        {/* <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Name</label>
          <input
            autoComplete="off"
            className={styles.Input}
            name="name"
            onChange={handleOnChange}
            placeholder="Name"
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorName}</p>
        </div> */}
        {/* <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Last Name</label>
          <input  
            autoComplete="off"
            className={styles.Input}
            name="lastName"
            onChange={handleOnChange}
            placeholder="LastName"
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorLastName}</p>
        </div> */}
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label} style={{ width: "85%" }}>
            Username
          </label>
          <input
            autoComplete="off"
            className={styles.Input}
            name="userName"
            onChange={handleOnChange}
            placeholder="cooluser21"
            required="True"
          ></input>
          <p className={styles.ErrorMsg} style={{ width: "85%" }}>
            {errorsMessage.errorUsername}
          </p>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Email</label>
          <input
            autoComplete="off"
            className={styles.Input}
            name="email"
            type="email"
            onChange={handleOnChange}
            placeholder="user@cool.com"
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorEmail}</p>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Password</label>
          <input
            className={styles.Input}
            placeholder="VerySecretPassword"
            name="password"
            type="password"
            onChange={handleOnChange}
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorPassword}</p>
        </div>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Confirm Password</label>
          <input
            className={styles.Input}
            name="confirmPassword"
            placeholder="VerySecretPassword"
            type="password"
            onChange={handleOnChange}
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorConfPass}</p>
        </div>
        {status}
        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Submit"
          onClick={handleOnSubmit}
        />

        <p className={styles.Msg}>Already have an account?</p>
        <Link to="/login" className={styles.LoginLink}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Registration;
