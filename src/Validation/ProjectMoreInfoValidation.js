export const validateRequest = (request) => {
    var errorInput=""
    if (request.motive === "") {
        errorInput="You must have a description of your request"
    } else if (request.motive.length < 15) {
        errorInput="Description too short"
    }
    return errorInput
}
