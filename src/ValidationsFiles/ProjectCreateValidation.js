import {validateTitle, validateDescription, validateTags} from './GeneralValidation';
import axios from "axios";
var redirect =false
var errorHighlight=""
var errorTag=""
var errorSkill=""
var errorProfile=""
var success=""
var limits={

  profileMinChar: 5,
  profileMaxChar: 60,
  minProfiles: 1,
  maxProfiles: 5,

  skillMinChar: 1,
  skillMaxChar: 30,
  minSkills: 1,
  maxSkills: 6,

}

export const validateSkill = (skills,currentSkill) => {
    if (currentSkill.length >= limits.skillMinChar) {
        if (currentSkill.length <= limits.skillMaxChar) {
            if (currentSkill.trim() == "") {
                errorSkill = "Skill cannot be empty"
            } else if (skills.length < limits.maxSkills) {
                errorSkill = ""
            } else {
                errorSkill = "You cannot have more than 6 skills"
            }
        } else {
            errorSkill = "You can only use 30 chars per Skill"
        }
    } else {
    errorSkill = "Skill can not be empty"
    }
    return errorSkill
};

export const validateHighlight = (highlights,currentHighlight) => {
    if (currentHighlight.length >= limits.profileMinChar) {
        if (currentHighlight.trim() == "") {
            errorHighlight="Cannot be empty"
        } else if (currentHighlight.length <= limits.profileMaxChar) {
            if (highlights.length < limits.maxProfiles) {
                errorHighlight=""
            } else {
                errorHighlight = "You can not have more than 5 highlights"
            }
        } else {
            errorHighlight = "Highlight can not have more than 60 char"
        }
    } else {
        errorHighlight = "Highlight must be at least 5 characters long"
    }
    return errorHighlight
};

// refactor Profile name
export const validateProfile = (profiles, currentProfile) => {
    if (currentProfile.length >= limits.profileMinChar) {
        if (currentProfile.length <= limits.profileMaxChar) {
            if (currentProfile.trim() == "") {
                errorProfile = "Cannot be empty"
            } else if (profiles.length < limits.maxProfiles) {
                errorProfile = ""
            } else {
                errorProfile = "You should add at least 1 profile"
            }
        } else {
            errorProfile = "Profiles can not have more than 60 char"
        }
    } else {
        errorProfile = "Profiles must be at least 5 characters long"
    }
    return errorProfile
};


const validateSkills = (skills) => {
  if (skills.length < limits.minSkills) {
    errorSkill="You should add at least 1 skill"
  }
  if (skills.length !== 0) {
    errorSkill=""
  }
};
const validateHighlightProfile = (highlights, profiles) => {
  if (highlights.length < limits.minProfiles) {
    errorHighlight="You should add at least 1 highlight"
  }
  if (highlights.length !== 0) {
    errorHighlight=""
  }

  if (profiles.length < limits.minProfiles) {
    errorProfile="You should add at least 1 profile requirement"
  }
  if (profiles.length !== 0) {
    errorProfile=""
  }
};

export const validateAll = (project, tags, skills, highlights, profiles) => {
  validateSkills(skills);
  validateHighlightProfile(highlights, profiles);

  if (
    validateDescription(project.description) === "" &&
    validateTitle(project.title) === "" &&
    errorTag === "" &&
    errorHighlight === "" &&
    errorSkill === "" &&
    errorProfile === ""
  ) {
        const Project = {
        title: project.title,
        description: project.description,
        status: project.status,
        tags: tags,
        highlights: highlights,
        desirables: profiles,
        skills: skills,
        };

        axios
        .post("http://localhost:3010/oprojects/create", Project, {
            headers: {
            // Send the JWT along in the request header
            "auth-token": window.localStorage.getItem("auth-token"),
            },
        })
        .then((res) => {
            success = "Project created succesfully!"
            setTimeout(()=>{
                redirect=true
            }, 2000);
        });
    }
    var message = {
        errorTitle: validateDescription(project.description),
        errorDescription:validateTitle(project.title), 
        errorHighlight, 
        errorTag: validateTags(tags),
        errorSkill,
        errorProfile,
        redirect,
        success,
    }
    return message
};

