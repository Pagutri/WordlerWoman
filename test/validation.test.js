const Validation = require("./../app/validation");

describe("Validation test", () => {
  test("1. Validation method VALIDATION: null", () => {
    const User = null;
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("Requiero una palabra válida");
  });
  test("2. Validation method VALIDATION:  Solo letras", () => {
    const User = 45673;
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("La palabra debe contener solo letras");
  });
  test("3. Validation method VALIDATION: 5 letras", () => {
    const User = "hilo";
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("La palabra requiere 5 letras");
  });
  test("4. Validation method VALIDATION: Acertaste", () => {
    const User = "hilos";
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("Acertaste");
  });


  /*
  test("6. Validation method wordCoincidences: Posición correcta", () => {
    const User = "lilos";
    const API = "hilos";
    const answer = Validation.wordCoincidences(API, User);
    expect(answer).toBe(`Letra:  ${letterAPI} en Posicion Correcta: ${positionAPI}`);
  });*/
}); 