const Validation = require("./../app/validation");

describe("Validation test", () => {
  test("Validation method", () => {
    const User = null;
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("Requiero una palabra válida");
  });
  test("Validation method", () => {
    const User = 45673;
    const API = "hilos";
    const answer = Validation.wordValidation(API, User);
    expect(answer).toBe("La palabra debe contener solo letras");
  });
});
