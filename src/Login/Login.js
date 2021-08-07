import React, { useState, useEffect } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { loginValidation } from "../validation/LoginValidation";
import { auth } from '../base'
import useLogin from '../hooks/useLogin'
import { BACKEND_DEV } from "../constants";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { loginStatus } = useLogin();

  const [status, setStatus] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(loginStatus);
  }, [loginStatus]);

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async () => {
    setStatus("");
    let validation = loginValidation(user); // returns message and ok flag
    console.log("validation returned:");
    console.log(JSON.stringify(validation));

    if (validation.ok) {

      console.log("Firebase login:", user.username, user.password);

      let email = user.username;

      if (validation.isUsername) {
        console.log("Username Login")
        try {
          const response = await axios.get(BACKEND_DEV + '/users/mail-query/' + user.username);
          email = response.data.email;
        } catch (error) {
          console.log("Error on email request", error);
          return;
        }
      }

      try {
        const loginCredentials = await auth.signInWithEmailAndPassword(email, user.password);
        console.log("Response:", loginCredentials);
        let msg = (
          <p className={styles.StatusMsg}>Logging in...</p>
        )
        setStatus(msg);

        setTimeout(() => {
          setRedirect(true)
        }, 200);

      } catch (err) {
        console.log("Firebase error", err.code, err.message);

        console.log("Login POST failed");
        let errorMsg = (
          <p className={styles.ErrorMsg}>
            Username/Password is wrong
          </p>
        );
        setStatus(errorMsg);
      }



    } else {
      let msg = (
        <p className={`${styles.StatusMsg} ${styles.Err}`}>{validation.msg}</p>
      );
      setStatus(msg);
    }
  };

  if (redirect) return (<Redirect to="/oprojects" />)

  return (
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
            Be sure to explore all sorts of projects. You will surely find
            something exciting!
          </p>
          <p className={styles.Bullet}>
            Include in your portfolio as much of your work as you can. Make
            others interested in you!
          </p>
          <p className={styles.Bullet}>
            Your skillset is very valuable. Don't be afraid to apply to a
            project!
          </p>
        </div>
      </div>

      <div className={styles.InputsContainer}>
        <div className={styles.InputsLogin}>
          <div className={styles.InputsTitleBox}>
            <p className={styles.InputsTitle}> Login</p>
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Username/Email</label>
            <input
              autoComplete="off"
              className={styles.Input}
              name="username"
              placeholder="cool21user"
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

          {status}

          <input
            value="Log in"
            className={styles.Button}
            type="button"
            onClick={handleOnSubmit}
          />
        </div>
        <div className={styles.NewUserContainer}>
          <p className={styles.NewUserMessage}>New to GEEB?</p>
          <Link to="/register" className={styles.NewUserLink}>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*
SMALL TODOS:
- Fix "Unmounted Component Update" Warning (useEffect cleanup)
*/