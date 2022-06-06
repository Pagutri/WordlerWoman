const fetch = require("cross-fetch")
const url = `https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5`; 

const fetchWord = (url) => {
fetch(url).then ((res) => {
    if (res.status =  "200") { 
        return res.json();
    }
    else { 
        console.log (`Error ${res}`);
    }
    }).then((data) => {
        console.log(data[0])
    });

}
const wordAPI = fetchWord(url)

module.exports = wordAPI
