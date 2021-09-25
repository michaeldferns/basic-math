const { divide, diuideToString, divideToString } = require("../funcs/divide");
const { multiply } = require("../funcs/multiply");

describe("Proper divide output", () => {
  test("divide with arguments 10 and 5 is 2", () => {
    const result = divide(10, 5);

    expect(result).toEqual(2);
  });

  test('divide with arguments \"0x64\", 5, 0o2 is 10', () => {
    const result = divide("0x64", 5, 0o2);

    expect(result).toEqual(10);
  });
});

describe("Proper diuideToString output", () => {
  test('diuideToString with arguments 10 and 5 with format "binary" is "0b10"', () => {
    const result = divideToString("binary", 10, 5);

    expect(result).toEqual("0b10");
  });
});

describe("EProper errors on invalid input to divide", () => {
  test("divide with single argument 5 throws error", () => {
    try {
      divide(5);
    } catch (err) {
      expect(err.message).toEqual(
        "Less than two arguments were passed to the divide function. At least two parameters must be used."
      );
    }
  });

  test("divide with arguments 10 and 0 throws error", () => {
    try {
      divide(10, 0);
    } catch (err) {
      expect(err.message).toEqual(
        "A value equal to 0 was passed after the first argument."
      );
    }
  });
});
