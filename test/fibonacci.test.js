const { fibonacci } = require("../src/fibonacci");

describe("fibonacci function", () => {
  test("fibonacci(1)=1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("fibonacci(6)=8", () => {
    expect(fibonacci(6)).toBe(8);
  });
  test("fibonacci()=1", () => {
    expect(fibonacci()).toBe(1);
  });
});
