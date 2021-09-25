const { multiply, multiplyToString } = require("../funcs/multiply");

describe("Proper multiply output", () => {
  test("multiply with arguments 1 and 2 is 2", () => {
    const result = multiply(1, 2);

    expect(result).toEqual(2);
  });

  test('multiply with arguments \"0b111\", 10, and 0x2 is ', () => {
    const result = multiply("0b111", 10, 0x2);

    expect(result).toEqual(140);
  })
});

describe("Proper multiplyToString output", () => {
  test("multiplyToString with arguments 1 and 2 and format hex is 0x2", () => {
    const result = multiplyToString("hex", 1, 2);

    expect(result).toEqual("0x2");
  });
});

describe("Proper errors on invalid input to multiply", () => {
  test("multiply with single argument 5 throws error", () => {
    try {
      multiply(5);
    } catch (err) {
      expect(err.message).toEqual(
        "Less than two arguments were passed to the multiply function. At least two parameters must be used."
      );
    }
  });
});
