import axios from "axios";

var errorUsername = ""
var redirect = false
var errorEmail = ""
var errorPassword = ""
var errorConfPass = ""
var errorName = ""
var errorLastName = ""
var success = ""

var limits = {
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
}
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
const validateName = (name) => {
  if (name.length < limits.nameCharMin) {
    errorUsername="Name must have at least 2 characters"
  }
  if (name.length > limits.nameCharMax) {
    errorUsername="Your name can't have more than 15 characters"
  }
  if (!onlyAlphanumeric(name)) {
    errorUsername="Your name can only have lowercase letters"
  }
  if (hasWhiteSpace(name)) {
    errorUsername="Your name cannot contain any spaces"
  }
  if(errorUsername != ""){
    success = "Something went wrong with your registration"
  }
};
const validateLastName = (lastName) => {
  if (lastName.length < limits.lastNameCharMin) {
    errorLastName = "Last name must have at least 2 characters"
  }
  if (lastName.length > limits.lastNameCharMax) {
    errorLastName = "Your last name can't have more than 15 characters"
  }
  if (!onlyAlphanumeric(lastName)) {
    errorUsername="Your name can only have lowercase letters"
  }
  if (hasWhiteSpace(lastName)) {
    errorLastName ="Your last name cannot contain any spaces"
  }
  if(errorLastName != ""){
    success = "Something went wrong with your registration"
  }
};

const validateUsername = (userName) => {
  if (userName.length < limits.userCharMin) {
    errorUsername = "Username must have at least 4 characters"
  }
  if (userName.length > limits.userCharMax) {
    errorUsername = "Your username can't have more than 20 characters"
  }
  if (!onlyAlphanumeric(userName)) {
    errorUsername ="Your username can only have lowercase letters and numbers"
  }
  if (hasWhiteSpace(userName)) {
    errorUsername ="Your username cannot contain any spaces"
  }
  if(errorUsername != ""){
    success = "Something went wrong with your registration"
  }
};

const validateEmail = (email) => {
  if (email === "") {
    errorEmail = "Email can not be empty"
  }
  if (!validEmail(email)) {
    errorEmail = "Not a valid email"
  }
  if (email.length < limits.emailCharMin) {
    errorEmail = "not a valid email"
  }
  if (email.length > limits.emailCharMax) {
    errorEmail = "Email is too long"
  }
  /*if (noWhiteSpace(user.email)) {
    setErrorEmail("Your email cannot have white spaces");
  }*/
  if(errorEmail != ""){
    success = "Something went wrong with your registration"
  }
};

const validatePassword = (password, confirmPassword) => {
  if (password === "") {
    errorPassword = "Password cannot be empty"
  } else if (password.length < limits.passwordCharMin) {
    errorPassword = "Your password must have at least 8 characters"
  } else if (password.length > limits.passwordCharMax) {
    errorPassword = "Your password cannot have more than 40 characters"
  }
  if (hasWhiteSpace(password)) {
    // password cannot contain whitespaces
    errorPassword = "Your password cannot contain spaces"
  }
  if (confirmPassword === "") {
    errorPassword = "You must confirm your password"
  } else if (password !== confirmPassword) {
    errorPassword = "Your password and confirm password are different"
  }

  if(errorPassword != ""){
    success = "Something went wrong with your registration"
  }
};

export const checkLast = (user) => {
  success = ""
  errorUsername = ""
  errorEmail = ""
  errorPassword = ""
  errorConfPass = ""
  errorName = ""
  errorLastName = ""
  validateName(user.name);
  validateLastName(user.lastName);
  validateUsername(user.userName);
  validateEmail(user.email);
  validatePassword(user.password, user.confirmPassword);

  if(success===""){
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
      setSuccess("You are now registered!")
      // to redirect to /oprojects
    })
    .catch(err => {
      // Set error message: "something went wrong"
      setSuccess("Something went wrong with your registration");
    })
  // if every error msg is empty, there are no validation errors. Send request
    
  }
  var errorsMessage = {
    success,
    errorUsername,
    errorEmail,
    errorPassword,
    errorConfPass,
    errorName,
    errorLastName,
    redirect
  }
  return errorsMessage
    
  
};
