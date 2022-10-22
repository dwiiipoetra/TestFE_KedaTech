const fishBash = require("./index");

describe("Test fishBash()", () => {
  //   positive case number param
  test("Positive Case", () => {
    const n = 5;
    const expectation = "fish";
    const result = fishBash(n);
    expect(result).toEqual(expectation);
  });

  //   negative case string param
  test("Positive Case", () => {
    const n = "test";
    const expectation = "0";
    const result = fishBash(n);
    expect(result).toEqual(expectation);
  });
});
