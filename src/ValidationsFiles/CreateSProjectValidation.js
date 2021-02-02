import {validateTitle, validateDescription, validateTags} from './GeneralValidation';
import axios from "axios";
var errorLink=""
var errorImage=""
var success = ""
const limits = {
  linkMinChar: 15,
  linkMaxChar: 30,
  minLink: 1,
  maxLink: 5,

  imageMinChar: 5,
  imageMaxChar: 30,
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


//validate Title, description, tags, link, collaborator


const validateLinks = (links) => {
  if (links.length < limits.minLink) {
    errorLink="You should add at least 1 link"
  }
  if (links.length > limits.maxLink) {
    errorLink="You can not add more than 5 links"
  }
  if (links.length !== 0) {
    errorLink=""
  }
};

const validateImages = (imageurls) => {
  if (imageurls.length < limits.minImage) {
    errorImage="You should add at least 1 Image"
  }
  if (imageurls.length > limits.maxImage) {
    errorImage="You can not add more than 5 Image"
  }
  if (imageurls.length !== 0) {
    errorImage=""
  }
};


//Handle on 
export const validateAll = (project, tags, links, imageurls) => {
    validateLinks(links);
    validateImages(imageurls);

    if (
        validateDescription(project.description) === "" &&
        validateTitle(project.title) === "" &&
        validateTags(tags)=== "" &&
        errorLink === "" &&
        errorImage === "" 
    ) {
        
        const Project = {
        title: project.title,
        description: project.description,
        tags: tags,
        links: links,
        imageurls: imageurls,
        };

        //console.log(galleta);
        {/*
        axios
        .post("http://localhost:3010/sprojects/create", Project, {
            headers: {
            "auth-token": window.localStorage.getItem("auth-token"),
            },
        })
        .then((res) => success="Your project was submit!");*/ }
        
    }else{
        success="The project was not created"
    }
    var messages={
        errorTitle: validateTitle(project.description),
        errorDescription:validateDescription(project.title), 
        errorTag:validateTags(tags),
        errorLink, 
        errorImage,
        success,
    }
    return messages
};