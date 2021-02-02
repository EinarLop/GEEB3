export const validateRequest = (request) => {
    errorInput=""
    if (request.requestDescription === "") {
        errorInput="You must have a description of your request"
      } else if (request.userEmail === "") {
        errorInput="You must enter a email so the owner of the project can contact you"
      } else if (request.userNames === "") {
        errorInput="You must enter your name"
      } else if (request.userNames.length < 10) {
        errorInput="User too short"
      } else if (request.userEmail.length < 12) {
        errorInput="Your email is not valid"
      } else if (request.requestDescription.length < 15) {
        errorInput="Description too short"
    }
    return errorInput
}
