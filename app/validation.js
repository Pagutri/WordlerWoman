class Validation {
  static wordValidation(API, User) {
    if (User == null) {
      return "Requiero una palabra válida";
    } else if (!/^[a-z]+$/.test(User)) {
      return "La palabra debe contener solo letras";
    } else if (API.length !== User.length) {
      return "La palabra requiere 5 letras";
    } else if (API != User) {
      return this.wordCoincidences(API, User);
    } else {
      return "Acertaste";
    }
  }

  //Método de obtención de coincidencias entre la palabra de la API con la del Usuario.
  static wordCoincidences(API, User) {
    const arrUser = User.split("");
    const arrAPI = API.split("");
    var positionAPI = 0;
    var matrizWord = [0, 0, 0, 0, 0];
    arrAPI.forEach((letterAPI) => {
      positionAPI = positionAPI + 1;
      var positionUser = 0;
      arrUser.forEach((letterUser) => {
        positionUser = positionUser + 1;
        if (letterAPI == letterUser) {
          if (positionAPI !== positionUser) {
            matrizWord[positionUser - 1] = 1;
            return console.log(
              `Letra:  ${letterUser.toUpperCase()} esta en Posición Incorrecta`
            );
          } else {
            matrizWord[positionUser - 1] = 2;
            return console.log(
              `Letra:  ${letterUser.toUpperCase()} esta en Posicion Correcta: ${positionAPI}`
            );
          }
        }
      });
    });
    return matrizWord;
  }
}

module.exports = Validation;
