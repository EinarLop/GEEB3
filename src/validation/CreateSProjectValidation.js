import {validateTitle, validateDescription, validateTags} from './GeneralValidation';
let errorLink=""

const limits = {
  linkMinChar: 5, // ab.es
  linkMaxChar: 100,
  minLink: 1,
  maxLink: 5,
  minImage: 1,
  maxImage: 4,
}
export const validateLink = (links, currentLink) => {
  if (links.length > limits.maxLink) {
    return "You cannot add more than 5 links";
  }
  if (currentLink.length < limits.linkMinChar) {
    return "Link is too short";
  }
  if (currentLink.length > limits.linkMaxChar) {
    return "Link is too long";
  }
  return ""
};

const validateLinks = (links) => {
  if (links.length > limits.maxLink) {
    return "Maximum number of links is 5";
  }
  return "";
};

// Check before Submit: Title, Description, Tags, Links
export const sprojectValidation = (project, tags, links) => {
    let ok = true;
    let errorTitle = validateTitle(project.title);
    console.log(errorTitle);
    let errorDescription = validateDescription(project.description);
    console.log(errorDescription);
    let errorTags = validateTags(tags);
    console.log(errorTags);
    let errorLinks = validateLinks(links);
    console.log(errorLinks);
    if (
        errorTitle !== "" ||
        errorDescription !== "" ||
        errorLinks !== "" ||
        errorTags !== ""
    ) ok = false;

    const validation={
        errorTitle,
        errorDescription,
        errorLinks,
        errorTags,
        ok,
    }
    return validation;
};