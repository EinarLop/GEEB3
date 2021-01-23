import React, { useState } from "react";
import styles from "./loginStyles.module.scss";
import axios from "axios"



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
  
  const cookieTesting = () =>{
    
    let galleta = document.cookie.slice(4)
    //console.log(galleta)

  } 
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
    if(errorInput==""){
      const User = {
        username:"12345678" ,  
        password: "12345678",
      }
      // checar que el username existe en base de datos

      // si existe, usarlo para comparar la password con bcrypt ?? 
    
      axios.post('http://localhost:3010/users/login',User, {withCredentials: true})
      .then(result => console.log(result))
      .catch(err => console.log(err));


   
    }
      
       

  };
  return (
    <body>
      <div className={styles.Global}>
        <div className={styles.Inputs}>
          <h1>Login now</h1>
          <input
            type="name"
            name="emailUserName"
            placeholder="Username"
            onChange={handleOnChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          ></input>
          <button onClick={handleOnSubmit}>Log in</button>
          <p className={styles.ErrorMsg}>{errorInput}</p>
          <h3>New to GEEB?</h3>
          <a href="Register">Create an account</a>
        </div>

        <div className={styles.Information}>
          <h1>Some tips for improving your experience at GEEB</h1>

          <ul>
            <li> Ultricies eget, tempor sit amet</li>
            <li> Ultricies eget, tempor sit amet</li>
            <li> Ultricies eget, empor sit amet</li>
            <li> Ultricies eget, tempor sit amet</li>
          </ul>
        </div>
      </div>
    </body>
  );
}
