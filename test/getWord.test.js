const GetWord = require("./../app/getWord");

describe("GetWord test", () => {
    test("1.Leer la palabra del ", () => {   
        const palabra = GetWord.listenWord("sales");
        expect(palabra).toBe("sales");
      });

});


