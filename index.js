const wordAPI = require("./app/accederAPI");
const GetWord = require("./app/getWord");


const word= wordAPI.viewWord();
console.log(word)

const getWord= GetWord.listenWord();
console.log(getWord)