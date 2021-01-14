import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfPass, setErrorConfPass] = useState("");
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  //comentando ando
  const handleOnSubmit = () => {
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfPass("");
    if (user.userName === "") {
      console.log("Usuario vacío");
      setErrorUsername("Username cannot be empty");
    } else if (user.userName.charAt(0) !== "@") {
      console.log("Usuario no valido");
      setErrorUsername("Invalid username");
    }

    if (user.email === "") {
      console.log("Email input is empty.");
      setErrorEmail("Email can not be empty");
    }

    if (user.password === "") {
      console.log("Password vacío");
      setErrorPassword("Password cannot be empty");
    } else if (user.password.length < 10) {
      console.log("Password vacío");
      setErrorPassword("Your password must have at least 10 characters");
    }

    if (user.confirmPassword === "") {
      console.log("Conf password vacío");
      setErrorConfPass("You must confirm your password");
    } else if (user.password !== user.confirmPassword) {
      console.log("Contraseñas diferentes");
      setErrorPassword("Your password and confirm password are different");
    }
  };
  return (
    <div className={styles.Global}>
      <div className={styles.Information}>
        <h1>What is GEEB?</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris
        </p>
      </div>

      <div className={styles.Inputs}>
        <h1>Register now</h1>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Username</label>
          <input
            autoComplete="off"
            className={styles.Input}
            name="userName"
            onChange={handleOnChange}
            placeholder="PkmMaster69"
          ></input>
          <p className={styles.ErrorMsg}>{errorUsername}</p>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Email</label>
          <input
            autoComplete="off" 
            className={styles.Input}
            name="email"
            onChange={handleOnChange}
            placeholder="PkmMaster69@gmail.com"
          ></input>
          <p className={styles.ErrorMsg}>{errorEmail}</p>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Password</label>
          <input
            className={styles.Input}
            placeholder="VerySecretPassword"
            name="password"
            type="password"
            onChange={handleOnChange}
          ></input>
          <p className={styles.ErrorMsg}>{errorPassword}</p>
        </div>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Confirm Password</label>
          <input
            className={styles.Input}
            name="confirmPassword"
            placeholder="VerySecretPassword"
            type="password"
            onChange={handleOnChange}
          ></input>
          <p className={styles.ErrorMsg}>{errorConfPass}</p>
        </div>

        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Submit"
          onClick={handleOnSubmit}
        />

        <p className={styles.Msg}>Already have an account?</p>
        <a href="login">Login</a>
      </div>
    </div>
  );
}

export default Registration;
