var errorUsername = ""
var errorEmail = ""
var errorPassword = ""
var errorConfPass = ""
var errorName = ""
var errorLastName = ""
var success = true

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
const onlyAlphabetic = (str) => {
  const re = /^[A-Za-z]+$/;
  console.log("Alphabetic(",str.toLowerCase(),") ?", re.test(str))
  return re.test(str);
}

const hasWhiteSpace = (str) => {
  const index = str.indexOf(" ");
  if (index == -1) {
    return false;
  }
  return true;
};
const validateName = (name) => {
  if (name.length < limits.nameCharMin) {
    errorName="Name must have at least 2 characters"
  }
  if (name.length > limits.nameCharMax) {
    errorName="Your name must be 15 characters long or less"
  }
  if (!onlyAlphabetic(name)) {
    errorName="Your name can only have alphabetic characters"
  }
  if (hasWhiteSpace(name)) {
    errorName="Your name cannot contain any spaces"
  }
  if(errorName != ""){
    success = false;
  }
};
const validateLastName = (lastName) => {
  if (lastName.length < limits.lastNameCharMin) {
    errorLastName = "Last name must have at least 2 characters"
  }
  if (lastName.length > limits.lastNameCharMax) {
    errorLastName = "Your last name can't have more than 15 characters"
  }
  if (!onlyAlphabetic(lastName)) {
    errorLastName="Your name can only have lowercase letters"
  }
  if(errorLastName != ""){
    success = false;
  }
};

const validateUsername = (userName) => {
  if (userName.length < limits.userCharMin) {
    errorUsername = "Username must have at least 4 characters"
  }
  if (userName.length > limits.userCharMax) {
    errorUsername = "Username must be 20 characters or less"
  }
  if (!onlyAlphanumeric(userName)) {
    errorUsername ="Username can only have lowercase letters and numbers"
  }
  if (hasWhiteSpace(userName)) {
    errorUsername ="Username cannot contain any spaces"
  }
  if(errorUsername != ""){
    success = false;
  }
};

const validateEmail = (email) => {
  if (email === "") {
    errorEmail = "Email can't be empty"
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
    success = false;
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
    success = false;
  }
};

export const registerValidation = (user) => {
  success = true;
  errorUsername = "";
  errorEmail = "";
  errorPassword = "";
  errorConfPass = "";
  errorName = "";
  errorLastName = "";
  validateName(user.name);
  validateLastName(user.lastName);
  validateUsername(user.userName);
  validateEmail(user.email);
  validatePassword(user.password, user.confirmPassword);

  var errorsMessage = {
    success,
    errorUsername,
    errorEmail,
    errorPassword,
    errorConfPass,
    errorName,
    errorLastName,
  }
  return errorsMessage
  
};
