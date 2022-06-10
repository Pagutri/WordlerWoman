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


//metodotest para ver funcionamiento de api
    static async fetchWordAPI(){
        const urlWordRandom = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5";
        fetch(urlWordRandom).then((res)=>{
            if (res.status != "200") {//200 = exito si es distinto hay error
                console.log(res);  //manda el error por consola             
            }
            else
            {
               
                console.log(res);//visualizar en consola que me trae el Response de la api externa en su respuesta              
                return res.json();
            }
        })
        
        //.then((data)=>{
        //console.log(data);//imprime prueba
        //wordAPI.saveWord(data);  
        //})
    };

}
module.exports = wordAPI

