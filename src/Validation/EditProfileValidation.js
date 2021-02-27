let errorName="";
let errorBio="";
let errorEmail="";
let errorMajor="";
let errorLinks="";
let errorM="";
let errorL="";
let errorW="";
let ok=true;

const limits ={
    fullname_max: 40,
    bio_max: 400,
    major_min: 3,
    major_max: 25,
    
    tag_min_chars: 1,
    tag_max_chars: 30,
    tags_min: 1,
    tags_max: 5,    // maximum of 5 tags per array, 15 total

    link_min_chars: 15,
    link_max_chars: 30,
    links_max: 5,   // maximum of 5 links per profile
}

const validateEmail = (email) => {
    if (email === "") {
      errorEmail = "Email can't be empty"
    }
    if (!validEmail(email)) {
      errorEmail = "Not a valid email"
    }
    if (email.length < limits.emailCharMin) {
      errorEmail = "Not a valid email"
    }
    if (email.length > limits.emailCharMax) {
      errorEmail = "Email is too long"
    }
    if(errorEmail != ""){
      ok = false;
    }
};

export const validateTags = (tags) => {
    let errorTag = "";
    if (tags.length > limits.tags_max) {
      errorTag="You may add up to 5 tags";
    }
    return errorTag;
};

const validateStack = (m, l, w) => {
    errorM = validateTags(m);
    errorL = validateTags(l);
    errorW = validateTags(w);
    if (errorM !== "" || errorL!=="" || errorW!=="") {
        ok = false;
    }
}

export const validateProfile = (User)=>{
    // fullname
    if (User.fullname.length > limits.fullname_max) {
        errorName="Name or last name is too long.";
    }
    // email
    validateEmail(User.email);

    // bio
    if (User.bio.length > limits.bio_max) {
        errorBio="Description must be 400 characters or less.";
        ok = false;
    }

    // major
    if (User.major.length>limits.major_max ||
         User.major.length<limits.major_min) {
             errorMajor = "Use a shorter name for your major.";
             ok = false;
    }

    // links
    if (User.links.length>limits.links_max) {
        errorLinks="You may have up to 5 links.";
        ok = false;
    }
    // Profile Tags
    validateStack(User.mastered, User.learning, User.want);

    const validation = {
        errorName,
        errorEmail,
        errorBio,
        errorMajor,
        errorLinks,
        errorM,
        errorL,
        errorW,
        ok
    }

    return validation;
}

