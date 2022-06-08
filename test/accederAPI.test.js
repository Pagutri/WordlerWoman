const { word } = require("./../app/accederAPI");
const wordAPI = require("./../app/accederAPI");

describe("API test", () => {  
  test("1. Obtain word from API:",  async () => {
    await wordAPI.getWordAPI();
    var word = wordAPI.wordObtained;
    expect(word).toBe('Patio');
  });  

});