import React, { useState } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios";
import {Redirect} from 'react-router-dom';

export default function login() {
  const [errorInput, setErrorInput] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit2 = () => {
    if (errorInput) {
      setErrorInput("");
    } else if (user.username === "") {
      console.log("Input username is empty");
      setErrorInput("username can not be empty");
    } else if (user.password === "") {
      console.log("Input password is empty");
      setErrorInput("Password can not be empty");
    } 
    if (errorInput == "") {
      const User = {
        username: user.username,
        password: user.password, 
      };
      // checar que el username existe en base de datos

      // si existe, usarlo para comparar la password con bcrypt ??

      axios
      .post("http://localhost:3010/users/login", User, {
        // https://geeb.herokuapp.com/users/login
        withCredentials: true,
      })
      .then((response) => {
        window.localStorage.setItem(
          "auth-token",
          response.headers["auth-token"]
        );
        setRedirect(true);
      })
      .catch((err) => setErrorInput("Password or username incorrect"));
    } 
  };
  {/**const handleOnSubmit = () => {
    if (errorInput) {
      setErrorInput("");
    } else if (user.email === "") {
      console.log("Input email is empty");
      setErrorInput("Email can not be empty");
    } else if (user.password === "") {
      console.log("Input password is empty");
      setErrorInput("Password can not be empty");
    } else if (
      user.emailUserName !== fakeProfile.email &&
      user.emailUserName !== fakeProfile.userName
    ) {
      console.log("Usuario no valido");
      setErrorInput("Unregistered user");
    } else if (user.password !== fakeProfile.password) {
      console.log("Contraseña incorrecta");
      setErrorInput("Incorrect Password");
    }
    // Validation OK
    if (errorInput == "") {
      const User = {
        username: "12345678",
        password: "12345678", // change to non hardcoded
      };
      // checar que el username existe en base de datos

      // si existe, usarlo para comparar la password con bcrypt ??

      axios
        .post("https://geeb.herokuapp.com/users/login", User, {
          // http://localhost:3010
          withCredentials: true,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  }; */}
  
  return (
    redirect ? <Redirect to="/oprojects"/> :
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoSubtitleBox}>
          <p className={styles.InfoSubtitle}>OUR TIPS FOR YOU</p>
        </div>
        <div className={styles.InfoTitleBox}>
          <p className={styles.InfoTitle}>Make the most out of GEEB.</p>
        </div>
        <div className={styles.InfoBullets}>
          <p className={styles.Bullet}>
            Be sure to explore all sorts of projects. You will surely find something exciting!
          </p>
          <p className={styles.Bullet}>
            Include in your portfolio as much of your work as you can. Make others interested in you!
          </p>
          <p className={styles.Bullet}>
            Your skillset is very valuable. Don't be afraid to apply to a project!
          </p>
        </div>
      </div>

      <div className={styles.InputsContainer}>
        <div className={styles.InputsLogin}>
          <div className={styles.InputsTitleBox}>
            <p className={styles.InputsTitle}> Login</p>
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Username</label>
            <input 
              autoComplete="off"
              className={styles.Input} 
              name="username"
              placeholder="user@cool"
              onChange={handleOnChange}
              required="True"
            ></input>
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Password</label>
            <input 
              autoComplete="off"
              className={styles.Input} 
              name="password" 
              type="password"
              placeholder="VerySecretPassword"
              onChange={handleOnChange}
              required="True"
            ></input>
          </div>

          <div className={styles.ButtonContainer}>
            <input
              value="Log in"
              className={styles.Button}
              type="button"
              onClick={handleOnSubmit2}
            />
          </div>
        </div>
        <div className={styles.NewUserContainer}>
          <p className={styles.NewUserMessage}>New to GEEB?</p>
          <a href="/" className={styles.NewUserLink}>
            {" "}
            Create an account{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
