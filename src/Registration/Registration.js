import React, { useState } from "react";
import axios from "axios" 
import styles from "./RegistrationStyles.module.scss";
import {Redirect} from 'react-router-dom';
// TODO ERIC&EINAR configurar boton para visualizar las passwords
function Registration() {
  const [errorUsername, setErrorUsername] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfPass, setErrorConfPass] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [user, setUser] = useState({
    // stores the current valus of inputs
    name:"",
    lastName:"",
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
    nameCharMin:2,
    nameCharMax:15,
    lastNameCharMin:2,
    lastNameCharMax:15,
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
  const validateName = () => {
    if (user.name.length < limits.nameCharMin) {
      setErrorUsername("Name must have at least 2 characters");
    }
    if (user.name.length > limits.nameCharMax) {
      setErrorUsername("Your username can't have more than 15 characters");
    }
    if (!onlyAlphanumeric(user.name)) {
      setErrorUsername(
        "Your username can only have lowercase letters and numbers"
      );
    }
    if (hasWhiteSpace(user.name)) {
      setErrorUsername("Your username cannot contain any spaces");
    }
  };
  const validateLastName = () => {
    if (user.lastName.length < limits.lastNameCharMin) {
      setErrorUsername("Name must have at least 2 characters");
    }
    if (user.lastName.length > limits.lastNameCharMax) {
      setErrorUsername("Your username can't have more than 15 characters");
    }
    if (!onlyAlphanumeric(user.lastName)) {
      setErrorUsername(
        "Your username can only have lowercase letters and numbers"
      );
    }
    if (hasWhiteSpace(user.lastName)) {
      setErrorUsername("Your username cannot contain any spaces");
    }
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
    setErrorName("");
    setErrorLastName("");
    validateName();
    validateLastName();
    validateUsername();
    validateEmail();
    validatePassword();

    if(errorUsername === "" && errorEmail === "" && errorPassword === "" &&
     errorConfPass === "" && errorName==="" && errorLastName===""){
      const User = {
      username: user.userName,
      email: user.email,
      password: user.password,
      fullname: user.name + ' ' + user.lastName,
      }
      axios.post("http://localhost:3010/users/register", User, {
        withCredentials: true,
      })
      .then(RegisteredUser=>{
        console.log(RegisteredUser);
        setRedirect(true);
        // to redirect to /oprojects
      })
      .catch(err => {
        // Set error message: "something went wrong"
        console.log(err);
      })
  }
    // if every error msg is empty, there are no validation errors. Send request
    
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
          <p className={styles.ErrorMsg}>{errorName}</p>
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
          <p className={styles.ErrorMsg}>{errorLastName}</p>
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
