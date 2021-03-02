/* GENERAL PROJECT VALIDATION: Title, Tag input, Description, Tag array*/

var errorTag=""
var errorTitle =""
var errorDescription=""
var limits={
    titleMinChar: 5,
    titleMaxChar: 50,
  
    descMinChar: 5,
    descMaxChar: 300,
  
    minTags: 1,
    maxTags: 6,
    tagMinChar: 1,
    tagMaxChar: 30,
}
export const validateTag = (tags,currentTag) => {
    if (currentTag.length >= limits.tagMinChar) {
        if (currentTag.length <= limits.tagMaxChar) {
            if (currentTag.trim() == "") {
                errorTag = "Tag cannot be empty"
            } else if (tags.length < limits.maxTags) {
                errorTag = ""
            } else {
                errorTag = "You cannot have more than 6 tags"
            }
        } else {
            errorTag = "You can only use 30 chars per tag"
        }
    } else {
    errorTag = "Tags cannot be empty"
    }
    return errorTag
};

export const validateTitle = (title) => {
    if (title.length < limits.titleMinChar) {
      errorTitle = "Title must be at least 5 characters long"
    }
    if (title.length > limits.titleMaxChar) {
      errorTitle = "Title can't have more than 50 char"
    }
    if (title.trim() == "") {
      errorTitle="Title cannot be empty."
    }
    if (
      title.length >= limits.titleMinChar &&
      title.length <= limits.titleMaxChar &&
      title.trim() != ""
    ) {
      errorTitle = ""
    }
    return errorTitle
  };
  
export const validateDescription = (description) => {
    if (description.length < limits.descMinChar) {
      errorDescription = "Description must be at least 5 characters long"
    }
    if (description.length > limits.descMaxChar) {
      errorDescription = "Description can't be more than 300 characters long"
    }
    if (description.trim() == "") {
      errorDescription = "Description cannot be empty."
    }
    if (
      description.length <= limits.descMaxChar &&
      description.length >= limits.descMinChar &&
      description.trim() != ""
    ) {
      errorDescription=""
    }
    return errorDescription
  };
  
export const validateTags = (tags) => {
    if (tags.length < limits.minTags) {
      errorTag="You should add at least 1 tag"
    }
    if (tags.length !== 0) {
      errorTag=""
    }
    return errorTag
  };