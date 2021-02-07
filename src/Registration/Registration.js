import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
import {Redirect} from 'react-router-dom';
import {checkLast} from '../Validation/RegisterValidation';
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [user, setUser] = useState({
    // stores the current valus of inputs
    name:"",
    lastName:"",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorsMessage, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);
//onChange ******************************************************************************************************************************
  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
//onSubmit ******************************************************************************************************************************
  const handleOnSubmit = () => {
    setErrors(checkLast(user))
    setRedirect(errorsMessage.redirect)
  };

  return (
    redirect ? <Redirect to="/oprojects"/> :
    <div className={styles.Global}>
      <div className={styles.Information}>
        <h1>What is GEEB?</h1>
        <div>
        <p>
          GEEB is a platform dedicated to all kinds of creators, leaders and entrepreneurs.</p>
          <ul>
            <li>Explore open projects and apply to work with interdisciplinary groups of people.</li>
            <li>Find collaborators and build the ideal team for your own ventures.</li>
            <li>Show off your past work and skills with your own online Portfolio.</li>
          </ul>          
          <p><b>Ready to accelerate your career, make valuable connections and make your project ideas come to life?</b></p>
        </div>

      </div>

      <div className={styles.Inputs}>
        <h1>Register now</h1>
        <div className={styles.InputLabelContainer}>
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
        </div>
        <div className={styles.InputLabelContainer}>
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
        </div>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Username</label>
          <input
            autoComplete="off"
            className={styles.Input}
            name="userName"
            onChange={handleOnChange}
            placeholder="cooluser21"
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorsMessage.errorUsername}</p>
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
          <p className={styles.ErrorMsg}>{errorsMessage.success}</p>
        </div>

        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Submit"
          onClick={handleOnSubmit}
        />

        <p className={styles.Msg}>Already have an account?</p>
        <a href="login" className={styles.LoginLink}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Registration;
