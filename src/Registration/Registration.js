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
  const validateEmail = (email) =>{
    const check =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(email)
  }
  //comentando ando
  const handleOnSubmit = () => {
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfPass("");
    if (user.userName < 4) {
      setErrorUsername("Username must have at least 4 characters");
    } else if (user.userName.charAt(0) !== "@") {
      setErrorUsername("Invalid username");
    }
    if(user.userName.length>20){
      setErrorUsername("Your username can´t have more than 20 characters")
    }
    if (user.email === "") {
      setErrorEmail("Email can not be empty");
    }else if(user.email.length<6){
      setErrorEmail("not a valid email")
    }else if(user.email.length>50){
      setErrorEmail("Not a valid email")
    }
    if(!validateEmail(user.email)){
      setErrorEmail("You must enter an email")
    }
    if (user.password === "") {
      setErrorPassword("Password cannot be empty");
    } else if (user.password.length < 8) {
      setErrorPassword("Your password must have at least 10 characters");
    }else if (user.password.length > 40) {
      setErrorPassword("Your password can not have more than 80 characters");
    }
    if (/\s/.test(user.password)) {
      setErrorPassword("Spaces are not allowed in passwords")
    }
    if (user.confirmPassword === "") {
      setErrorConfPass("You must confirm your password");
    } else if (user.password !== user.confirmPassword) {
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
            placeholder="PkmMaster69@gmail.com"
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
        <a href="login">Login</a>
      </div>
    </div>
  );
}

export default Registration;
