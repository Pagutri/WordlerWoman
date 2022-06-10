const wordAPI = require("./app/accederAPI");
const GetWord = require("./app/getWord");


const word= wordAPI.fetchWordAPI();
console.log(word);
console.log("---------------------------------");
const wordTest= wordAPI.getWordAPItest();
console.log(wordTest);



// const getWord= GetWord.listenWord();
// console.log(getWord)