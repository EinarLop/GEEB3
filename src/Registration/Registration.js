import React, { useState } from "react";
import styles from "./RegistrationStyles.module.scss";
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfPass, setErrorConfPass] = useState("");
  const [user, setUser] = useState({
    // stores the current valus of inputs
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
  const [limits, setLimits] = useState({
    //no white spaces
    userCharMin: 4,
    userCharMax: 20,
    emailCharMin: 6,
    emailCharMax: 50,
    //no white spaces
    passwordCharMin: 8,
    passwordCharMax: 40,
  });
  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    console.log("validateEmail result: " + re.test(email));
    return re.test(email);
  };
  const onlyAlphanumeric = (str) => {
    const re = /^[a-z0-9]+$/; // only lowercase alphanumeric
    console.log("alphanumeric result: " + re.test(str));
    return re.test(str);
  };

  const hasWhiteSpace = (str) => {
    const index = str.indexOf(" ");
    if (index == -1) {
      return false;
    }
    return true;
  };

  const validateUsername = () => {
    if (user.userName.length < limits.userCharMin) {
      setErrorUsername("Username must have at least 4 characters");
    }
    if (user.userName.length > limits.userCharMax) {
      setErrorUsername("Your username can't have more than 20 characters");
    }
    if (!onlyAlphanumeric(user.userName)) {
      setErrorUsername(
        "Your username can only have lowercase letters and numbers"
      );
    }
    if (hasWhiteSpace(user.userName)) {
      setErrorUsername("Your username cannot contain any spaces");
    }
  };

  const validateEmail = () => {
    if (user.email === "") {
      setErrorEmail("Email can not be empty");
    }
    if (!validEmail(user.email)) {
      setErrorEmail("Not a valid email");
    }
    if (user.email.length < limits.emailCharMin) {
      setErrorEmail("not a valid email");
    }
    if (user.email.length > limits.emailCharMax) {
      setErrorEmail("Email is too long");
    }
    /*if (noWhiteSpace(user.email)) {
      setErrorEmail("Your email cannot have white spaces");
    }*/
  };

  const validatePassword = () => {
    if (user.password === "") {
      setErrorPassword("Password cannot be empty");
    } else if (user.password.length < limits.passwordCharMin) {
      setErrorPassword("Your password must have at least 8 characters");
    } else if (user.password.length > limits.passwordCharMax) {
      setErrorPassword("Your password cannot have more than 40 characters");
    }
    if (hasWhiteSpace(user.password)) {
      // password cannot contain whitespaces
      setErrorPassword("Your password cannot contain spaces");
    }
    if (user.confirmPassword === "") {
      setErrorConfPass("You must confirm your password");
    } else if (user.password !== user.confirmPassword) {
      setErrorPassword("Your password and confirm password are different");
    }
  };

  const handleOnSubmit = () => {
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfPass("");
    validateUsername();
    validateEmail();
    validatePassword();
    // if every error msg is empty, there are no validation errors. Send request
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
            placeholder="cooluser21"
            required="True"
          ></input>
          <p className={styles.ErrorMsg}>{errorUsername}</p>
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
            required="True"
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
            required="True"
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
        <a href="login" className={styles.LoginLink}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Registration;
