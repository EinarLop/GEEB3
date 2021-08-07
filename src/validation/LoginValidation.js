import { validEmail } from './RegisterValidation'

export const loginValidation = (user) => {
  let msg = "";
  let ok = false;

  if (user.username === "") {
    msg = "Username can't be empty"
  } else if (user.password === "") {
    msg = "Password can't be empty"
  } else {
    ok = true;
  }

  const isUsername = !validEmail(user.username);

  const validation = {
    msg,
    ok,
    isUsername
  }
  return validation;
}