const fetch = require("cross-fetch")

class wordAPI { 
    
    constructor() {
        this.wordObtained = "";  
      }
      
    static async getWordAPI(){
        return await fetch("https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5")
        .then( response => response.json()).then(data => this.saveWord(data));        
    };

    static saveWord(word){
        this.wordObtained = word;
    }  
}
module.exports = wordAPI

