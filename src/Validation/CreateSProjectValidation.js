import {validateTitle, validateDescription, validateTags} from './GeneralValidation';
let errorLink=""
let errorImage=""
let success = ""
const limits = {
  linkMinChar: 15,
  linkMaxChar: 30,
  minLink: 1,
  maxLink: 5,
  //imageMinChar: 5,
  //imageMaxChar: 30,
  minImage: 1,
  maxImage: 5,
}
export const validateLink = (links, currentLink) => {
  if (currentLink.length >= limits.linkMinChar) {
    if (currentLink.length <= limits.linkMaxChar) {
      if (currentLink.trim() == "") {
        errorLink="Link cannot be empty"
      } else if (links.length < limits.maxLink) {
        errorLink=""
      } else {
        errorLink="You cannot have more than 6 links"
      }
    } else {
        errorLink="You can only use 30 chars per links"
    }
  } else {
    errorLink="Links but be at least 15 characters"
  }
  return errorLink
};

export const validateImage = (imageurls, currentImage) => {
  if (currentImage.length >= limits.imageMinChar) {
    if (currentImage.length <= limits.imageMaxChar) {
      if (imageurls.length < limits.maxImage) {
        errorImage=""
      } else {
        errorImage="You cannot have more than 6 Images"
      }
    } else {
        errorImage="You can only use 30 chars per Images"
    }
  } else {
    errorImage="Images cannot be empty"
  }
  return errorImage
};

const validateLinks = (links) => {
  // TODO: Remove lower limit? Sprojects may have 0 links
  /*if (links.length < limits.minLink) {
    errorLink="You should add at least 1 link"
  }*/
  if (links.length > limits.maxLink) {
    errorLink="Maximum number of links is 5";
  }
};

const validateImages = (imageurls) => {
  /*
  if (imageurls.length < limits.minImage) {
    errorImage="You should add at least 1 image"
  }*/
  if (imageurls.length > limits.maxImage) {
    errorImage="You can not add more than 5 images"
  }
};

// Check before Submit: Title, Description, Tags, Links
export const validateAll = (project, tags, links) => {
    validateLinks(links);
    if (
        validateDescription(project.description) !== "" &&
        validateTitle(project.title) !== "" &&
        validateTags(tags) !== "" &&
        errorLink !== ""
    ) {  // One or more errors
        success="Please check your inputs!";
    };

    let messages={
        errorTitle: validateTitle(project.description),
        errorDescription:validateDescription(project.title), 
        errorTag:validateTags(tags),
        errorLink, 
        success,
    }
    return messages
};