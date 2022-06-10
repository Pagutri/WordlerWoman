const fetch = require("cross-fetch")

class wordAPI { 
    
    constructor() {
        this.wordObtained = "";  
      }
    //trae palabra aleatoria de 5 caracteres
    static async getWordAPI(){
        return await fetch("https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5")
        .then( response => response.json()).then(data => this.saveWord(data));        
    };
    //guardo esa palabra
    static saveWord(word){       
        this.wordObtained = word;
    }  
//metodo para probar funcionamiento, se borrará
    static async getWordSaved(){
        return await fetch("https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5")
    }
}
module.exports = wordAPI

