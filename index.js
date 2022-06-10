const wordAPI = require("./app/accederAPI");
const GetWord = require("./app/getWord");


const word= wordAPI.fetchWordAPI();
console.log(word)

const getWord= GetWord.listenWord();
console.log(getWord)