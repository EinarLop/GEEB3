import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
import { Redirect, Link } from "react-router-dom";
import { registerValidation } from "../validation/RegisterValidation";
import { auth } from '../base';
import axios from "axios";
import useLogin from "../hooks/useLogin";
import { BACKEND_DEV } from "../constants";


const Registration = ({ loginStatus }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorsMessage, setErrors] = useState({});
  const [redirect, setRedirect] = useState(loginStatus);
  const [status, setStatus] = useState();

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };


  const handleOnSubmit = async () => {

    console.log("Submitted user \n", JSON.stringify(user));

    let validation = registerValidation(user);
    setErrors(validation);  // show any validation errors

    console.log("validation = \n", JSON.stringify(validation));

    if (validation.success) {
      const User = {
        username: user.userName,
        email: user.email,
        password: user.password,
      };

      console.log("Creating Firebase User");
      try {
        // creates and automatically signs in
        const resp = await auth.createUserWithEmailAndPassword(User.email, User.password);
        console.log("Firebase response", resp);
      } catch (err) {
        console.log("Firebase Auth error", err.code, err.message);
        const errorMsg = (
          <p className={styles.ErrorMsg} style={{ textAlign: 'center' }}>
            {err.message}
          </p>
        );
        setStatus(errorMsg);
        return;
      }

      console.log("Register User in MongoDB");

      try {
        const registeredUser = await axios.post(BACKEND_DEV + "/users/register", User);

        const msg = (
          <p style={{ color: "green", fontSize: "1.8rem" }}>
            You are now registered! <br /> Redirecting you to your feed...
          </p>
        );

        setStatus(msg);
        console.log("New registered user MongoDB:", registeredUser);

        setTimeout(() => setRedirect(true), 2000);

      } catch (error) {
        console.log("Server error: ", error);

        const deleteResp = await auth.currentUser.delete();
        console.log("Deleted fb user:", deleteResp);

        const errorMsg = (
          <p className={styles.ErrorMsg}>
            Something went wrong. Please try again.
          </p>
        );

        setStatus(errorMsg);
      }

    } else {
      const errorMsg = (
        <p className={styles.ErrorMsg} style={{ textAlign: 'center' }}>
          Oops. Please check your inputs!
        </p>
      );
      setStatus(errorMsg);
    }
  };


  if (redirect) return (<Redirect to="/oprojects" />);

  return (
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
          <p className={styles.ErrorMsg} style={{ width: "100%" }}>
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
        <div className={styles.statusContainer}>
          {status}
        </div>
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
