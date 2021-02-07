import axios from "axios";
var errorBios=""
var errorTags=""
var errorLinks=""
var errorMajor=""

const limits ={
    bioMinChar: 15,
    bioMaxChar: 400,
    
    majorMinChar: 3,
    majorMaxChar: 30,

    tagsMinChar: 1,
    tagsMaxChar: 30,
    minTags: 1,
    maxTags: 5,

    linkMinChar: 15,
    linkMaxChar: 30,
    minLink: 1,
    maxLink: 5,

}
export const validateProfile = (bios, mastered, learning, wants, major)=>{
    return "Hello there"
}

