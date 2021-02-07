import axios from "axios";
export const loginValidation = (user) => {
    var errorInput = ""
    var redirect = false
    if (user.username === "") {
      errorInput = "username can not be empty"
    } else if (user.password === "") {
      errorInput = "Password can not be empty"
    } 
    if (errorInput == "") {
      const User = {
        username: user.username,
        password: user.password, 
      };
      // checar que el username existe en base de datos

      // si existe, usarlo para comparar la password con bcrypt ??
      axios
      .post("http://localhost:3010/users/login", User, {  // https://geeb.herokuapp.com/users/login
        withCredentials: true,
      })
      .then((response) => {
        // SET THE JWT IN LOCALSTORAGE
        window.localStorage.setItem(
          "auth-token",
          response.headers["auth-token"]
        );
        redirect = true;
        errorInput="Login Correct!"
      })
      .catch((err) => errorInput="Password or username incorrect"); 
      
    } 
    var errorMessage = {
        errorInput,
        redirect
    }
    return errorMessage
}