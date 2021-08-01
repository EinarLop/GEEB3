const limits = {
  nameCharMin: 2,
  nameCharMax: 15,
  lastNameCharMin: 2,
  lastNameCharMax: 15,
  userCharMin: 4,
  userCharMax: 20,
  emailCharMin: 6,
  emailCharMax: 50,
  passwordCharMin: 8,
  passwordCharMax: 40,
}

/* HELPER FUNCTIONS */
export const validEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  console.log("validateEmail result: " + re.test(email));
  return re.test(email);
};
export const onlyAlphanumeric = (str) => {
  const re = /^[a-z0-9A-Z]+$/; // only lowercase alphanumeric
  console.log("is Alphanumeric result: " + re.test(str));
  return re.test(str);
};
export const onlyAlphabetic = (str) => {
  const re = /^[A-Za-z]+$/;
  console.log("Alphabetic(", str.toLowerCase(), ") ?", re.test(str))
  return re.test(str);
}
export const hasWhiteSpace = (str) => {
  const index = str.indexOf(" ");
  if (index == -1) {
    return false;
  }
  return true;
};


/* VALIDATOR FUNCTIONS */
const validateName = (name) => {
  if (name.length < limits.nameCharMin) {
    return "Name must have at least 2 characters"
  }
  if (name.length > limits.nameCharMax) {
    return "Your name must be 15 characters long or less"
  }
  if (!onlyAlphabetic(name)) {
    return "Your name can only have alphabetic characters"
  }
  if (hasWhiteSpace(name)) {
    return "Your name cannot contain any spaces"
  }

  // no errors
  return "";
};


const validateLastName = (lastName) => {
  if (lastName.length < limits.lastNameCharMin) {
    return "Last name must have at least 2 characters"
  }
  if (lastName.length > limits.lastNameCharMax) {
    return "Your last name can't have more than 15 characters"
  }
  if (!onlyAlphabetic(lastName)) {
    return "Your name can only use letters from A to Z"
  }

  // no errors
  return "";
};


const validateUsername = (userName) => {
  if (userName.length < limits.userCharMin) {
    return "Username must have at least 4 characters"
  }
  if (userName.length > limits.userCharMax) {
    return "Username must be 20 characters or less"
  }
  if (!onlyAlphanumeric(userName)) {
    return "Username can only have lowercase letters and numbers"
  }
  if (hasWhiteSpace(userName)) {
    return "Username cannot contain any spaces"
  }

  // no errors
  return "";
};

const validateEmail = (email) => {
  if (email === "") {
    return "Email can't be empty"
  }
  if (!validEmail(email)) {
    return "Not a valid email"
  }
  if (email.length < limits.emailCharMin) {
    return "not a valid email"
  }
  if (email.length > limits.emailCharMax) {
    return "Email is too long"
  }

  // no errors
  return "";
};

const validatePassword = (password, confirmPassword) => {
  if (password === "") {
    return "Password cannot be empty";
  }
  if (password.length < limits.passwordCharMin) {
    return "Your password must have at least 8 characters";
  }
  if (password.length > limits.passwordCharMax) {
    return "Your password cannot have more than 40 characters";
  }
  if (hasWhiteSpace(password)) {
    return "Your password cannot contain spaces";
  }
  if (confirmPassword === "") {
    return "You must confirm your password";
  }
  if (password !== confirmPassword) {
    return "Your password and confirm password are different"
  }

  // no errors
  return "";
};

export const registerValidation = (user) => {

  const errorUsername = validateUsername(user.userName);
  const errorEmail = validateEmail(user.email);
  const errorPassword = validatePassword(user.password, user.confirmPassword);

  const success = (errorUsername === "" && errorEmail === "" && errorPassword === "")

  const validation = {
    success,
    errorUsername,
    errorEmail,
    errorPassword,
  }

  return validation

};
