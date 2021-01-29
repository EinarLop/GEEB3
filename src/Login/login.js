import React, { useState } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios";

export default function login() {
  const [errorInput, setErrorInput] = useState("");
  const [user, setUser] = useState({
    emailUserName: "",
    password: "",
  });
  const [fakeProfile, setFakeProfile] = useState({
    email: "micorreo@gmail.com",
    password: "contraseña123",
  });
  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const cookieTesting = () => {
    let galleta = document.cookie.slice(4);
    //console.log(galleta)
  };
  const handleOnSubmit2 = () => {
    const User = {
      username: "12345678",
      password: "12345678",       // change to non hardcoded
    };
    axios
        .post("http://localhost:3010/users/login", User, {     // https://geeb.herokuapp.com/users/login
          withCredentials: true,
        }) 
        .then((response) => {
          
          window.localStorage.setItem('auth-token', response.headers["auth-token"])
          
          
        })
        .catch((err) => console.log(err));
  };
  const handleOnSubmit = () => {
    if (errorInput) {
      setErrorInput("");
    } else if (user.emailUserName === "") {
      console.log("Input username/email is empty");
      setErrorInput("Username can not be empty");
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
        password: "12345678",       // change to non hardcoded
      };
      // checar que el username existe en base de datos

      // si existe, usarlo para comparar la password con bcrypt ??

      axios
        .post("https://geeb.herokuapp.com/users/login", User, {     // http://localhost:3010
          withCredentials: true,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoTitleBox}>
          <p className={styles.InfoTitle}>Our best tips for you</p>
        </div>

        <div className={styles.InfoBullets}>
          <p className={styles.Bullet}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className={styles.Bullet}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className={styles.Bullet}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      
      <div className={styles.InputsContainer}>
        <div className={styles.InputsTitleBox}>
          <p className={styles.InputsTitle}> Login</p>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Email</label>
          <input className={styles.Input}></input>
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Password</label>
          <input className={styles.Input}></input>
        </div>

        <div className={styles.ButtonContainer}>
          <input value="Log in" className={styles.Button} type="button" onClick={handleOnSubmit2} />
        </div>

        <div className={styles.NewUserContainer}>
          <p className={styles.NewUserMessage}>New to GEEB?</p>
          <a href="/"className={styles.NewUserLink}> Create an account </a>
        </div>
      </div>
    </div>
  );
}
