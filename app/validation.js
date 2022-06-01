
class Validation {
    static wordValidation(API, User){
        if (User == null) {
            return "Requiero una palabra válida";
        }
        else if (!/^[a-z]+$/.test(User)){
            return "La palabra debe contener solo letras";
        }
        else if (API.length !== User.length){
            return "La palabra requiere 5 letras";
        }
        else if (API != User){
            return "Intenta de nuevo";
        }
        else {
            return "Acertaste";
        }
    }
}

module.exports = Validation;


