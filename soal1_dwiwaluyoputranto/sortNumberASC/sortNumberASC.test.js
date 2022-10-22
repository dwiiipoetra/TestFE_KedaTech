const sortNumberASC = require("./index");

describe("Test sortNumberASC()", () => {
  //   positive case array param
  test("Positive Case", () => {
    const array = [1, 7, 2, 8, 10, 21, 30, 45];
    const expectation =
      "diurutkan secara ascending: [1, 2, 7, 8, 10, 21, 30, 45]";
    const result = sortNumberASC(array);
    expect(result).toEqual(expectation);
  });

  //   negative case number, string, boolean param
  test("Negative Case", () => {
    const array = 123;
    const expectation = "0";
    const result = sortNumberASC(array);
    expect(result).toEqual(expectation);
  });
  test("Negative Case", () => {
    const array = "test";
    const expectation = "0";
    const result = sortNumberASC(array);
    expect(result).toEqual(expectation);
  });
  test("Negative Case", () => {
    const array = true;
    const expectation = "0";
    const result = sortNumberASC(array);
    expect(result).toEqual(expectation);
  });
});
