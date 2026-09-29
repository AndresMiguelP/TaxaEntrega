const { calcularTaxaEntrega } = require("./taxaEntrega");

describe("Cálculo da Taxa de Entrega - ISO 29119-4", () => {

  test("CT-01: Limite inferior válido - 1 km", () => {
    expect(calcularTaxaEntrega(1)).toBe(5.00);
  });

  test("CT-02: Classe válida - 5 km", () => {
    expect(calcularTaxaEntrega(5)).toBe(5.00);
  });

  test("CT-03: Limite superior da primeira faixa - 10 km", () => {
    expect(calcularTaxaEntrega(10)).toBe(5.00);
  });

  test("CT-04: Limite inferior da segunda faixa - 11 km", () => {
    expect(calcularTaxaEntrega(11)).toBe(15.00);
  });

  test("CT-05: Classe válida - 30 km", () => {
    expect(calcularTaxaEntrega(30)).toBe(15.00);
  });

  test("CT-06: Limite superior da segunda faixa - 50 km", () => {
    expect(calcularTaxaEntrega(50)).toBe(15.00);
  });

  test("CT-07: Limite inferior da terceira faixa - 51 km", () => {
    expect(calcularTaxaEntrega(51)).toBe(30.00);
  });

  test("CT-08: Classe válida - 75 km", () => {
    expect(calcularTaxaEntrega(75)).toBe(30.00);
  });

  test("CT-09: Limite superior válido - 100 km", () => {
    expect(calcularTaxaEntrega(100)).toBe(30.00);
  });

  test("CT-10: Limite inferior inválido - 0 km", () => {
    expect(() => calcularTaxaEntrega(0))
      .toThrow("DistanciaInvalidaException");
  });

  test("CT-11: Limite superior inválido - 101 km", () => {
    expect(() => calcularTaxaEntrega(101))
      .toThrow("DistanciaInvalidaException");
  });

});