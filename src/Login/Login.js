import React, { useState } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import {loginValidation} from '../Validation/LoginValidation';

export default function login() {
  const [loginMessage,setErrorMessage] = useState({
    errorInput : "",
    redirect : false,
  });
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
    setErrorMessage(loginValidation(user))
  };
  
  
  return (
    loginMessage.redirect ? <Redirect to="/oprojects"/> :
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
          <p className={styles.ErrorMsg}>{loginMessage.errorInput}</p>
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
