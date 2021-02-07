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
    
    const validation = {
        msg,
        ok
    }
    return validation;
}