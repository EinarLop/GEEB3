import React, { useState } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { loginValidation } from "../validation/LoginValidation";
import { auth } from '../base'
import useLogin from '../hooks/useLogin'

const Login = ({ loginStatus }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState();
  const [redirect, setRedirect] = useState(loginStatus);

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
      console.log("Firebase login...");
      try {
        const loginCredentials = await auth.signInWithEmailAndPassword(user.username, user.password);
        console.log("Response:", loginCredentials);
      } catch (err) {
        console.log("Firebase error", err.code, err.message);
      }


      console.log("Mongo login...");
      axios
        .post("http://localhost:3010/users/login", user)
        .then((response) => {
          console.log("Succesful login!");

          console.log("Firebase credentials:", loginCredentials);

          let msg = (
            <p className={`${styles.StatusMsg} ${styles.Ok}`}>Logging in...</p>
          );
          setStatus(msg);
          window.localStorage.setItem(
            "auth-token",
            response.headers["auth-token"]
          );
          console.log("Login response is:", response.data);
          window.localStorage.setItem("geebId", response.data.userId); // save the user's _id to localstorage
          setTimeout(() => setRedirect(false), 2000);
        })
        .catch((err) => {
          console.log("Login POST failed");
          let msg = (
            <p className={`${styles.StatusMsg} ${styles.Err}`}>
              Username/Password is wrong
            </p>
          );
          setStatus(msg);
        });
    } else {
      let msg = (
        <p className={`${styles.StatusMsg} ${styles.Err}`}>{validation.msg}</p>
      );
      setStatus(msg);
    }
  };

  return redirect ? (
    <Redirect to="/oprojects" />
  ) : (
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