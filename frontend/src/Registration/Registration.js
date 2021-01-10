import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [errorInput, setErrorInput] = useState("");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmit = () => {
    if (errorInput) {
      setErrorInput("");
    }
    if (user.name === "") {
      console.log("Name input is empty.");
      setErrorInput("Name can not be empty");
    } else if (user.userName === "") {
      console.log("Usuario vacío");
      setErrorInput("Username cannot be empty");
    } else if (user.userName.charAt(0) !== "@") {
      console.log("Usuario no valido");
      setErrorInput("Invalid username");
    } else if (user.email === "") {
      console.log("Email input is empty.");
      setErrorInput("Email can not be empty");
    } else if (user.password !== user.confirmPassword) {
      console.log("Contraseñas diferentes");
      setErrorInput("Your password and confirm password are different");
    } else if (user.password === "") {
      console.log("Password vacío");
      setErrorInput("Password cannot be empty");
    } else if (user.password.length < 10) {
      console.log("Password vacío");
      setErrorInput("Your password must have at least 10 characters");
    } else if (user.confirmPassword === "") {
      console.log("Conf password vacío");
      setErrorInput("You must confirm your password");
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
            className={styles.Input}
            //deleted name="name"
            onChange={handleOnChange}
            placeholder="PkmMaster69"
          ></input>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Email</label>
          <input
            className={styles.Input}
            //deleted name="name"
            onChange={handleOnChange}
            placeholder="PkmMaster69@gmail.com"
          ></input>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Password</label>
          <input
            className={styles.Input}
            placeholder="VerySecretPassword"
            //deleted name="name"
            onChange={handleOnChange}
          ></input>
        </div>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Confirm Password</label>
          <input
            className={styles.Input}
            //deleted name="name"
            placeholder="VerySecretPassword"
            onChange={handleOnChange}
          ></input>
        </div>

        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Submit"
          onClick={handleOnSubmit}
        />
        <p className={styles.ErrorMsg}>{errorInput}</p>

        <p className={styles.Msg}>Already have an account?</p>
        <a href="login">Login</a>
      </div>
    </div>
  );
}

export default Registration;
