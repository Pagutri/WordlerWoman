const wordAPI = require("./app/accederAPI");
const GetWord = require("./app/getWord");


const getWord= wordAPI.getWordSaved();
console.log(getWord)