let errorName="";
let errorBio="";
let errorEmail="";
let errorMajor="";
let errorLinks="";
let errorMastered="";
let errorLearning="";
let errorWants="";
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

    link_min_chars: 8,
    link_max_chars: 45,
    links_max: 5,   // maximum of 5 links per profile
}

const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    console.log("validateEmail result: " + re.test(email));
    return re.test(email);
};

const hasWhiteSpace = (str) => {
    const index = str.indexOf(" ");
    if (index == -1) {
      return false;
    }
    return true;
};

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

export const validateInputTag = (tag, number) => {
    let errorTag = "";
    if (tag==="") {
        errorTag="Tags can't be empty";
    }
    if (tag.length > limits.tag_max_chars) {
        errorTag="Tag name is too long";
    }
    if (number> limits.tags_max) {
        errorTag="You may add up to 5 tags";
    }
    return errorTag;
}

export const validateTags = (tags) => {     // sanity check, since validateInput tag would not allow more than 5
    let errorTags = "";
    if (tags.length > limits.tags_max) {
      errorTags="You may add up to 5 tags";
    }
    return errorTags;
};

export const validateLink = (link, number) => {
    let errLink = "";
    if (link==="") {
        errLink="Links can't be empty";
    }
    else if (link.length < limits.link_min_chars) {
        errLink = "Link address is too short"
    }
    if (link.length > limits.link_max_chars) {
        errLink="Link address is too long";
    }
    if (number> limits.links_max) {
        errLink="You may add up to 5 links";
    }
    return errLink;
};
  

const validateStack = (m, l, w) => {
    errorMastered = validateTags(m);
    errorLearning = validateTags(l);
    errorWants = validateTags(w);
    if (errorMastered !== "" || errorLearning!=="" || errorWants!=="") {
        ok = false;
    }
}

export const validateProfile = (User)=>{
    errorName="";
    errorBio="";
    errorEmail="";
    errorMajor="";
    errorLinks="";
    errorMastered="";
    errorLearning="";
    errorWants="";
    ok=true;
    // fullname
    if (User.fullname.length > limits.fullname_max) {
        errorName="Name / Last name is too long.";
    }
    // email
    validateEmail(User.email);

    // bio
    if (User.bio.length > limits.bio_max) {
        errorBio="Description must be 400 characters or less.";
        ok = false;
    }

    // major
    if (User.major.length>limits.major_max) {
        errorMajor = "Use a shorter name for your major.";
        ok = false;
    } 
    if (User.major.length<limits.major_min) {
        errorMajor = "Major is too short.";
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
        errorMastered,
        errorLearning,
        errorWants,
        ok
    }

    return validation;
}

