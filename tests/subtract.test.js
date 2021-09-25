const { subtract, subtractToString } = require("../funcs/subtract");

describe("Proper subtract output", () => {
  test("subtract with arguments 10 and 5 is 5", () => {
    const result = subtract(10, 5);

    expect(result).toEqual(5);
  });

  test("subtract with arguments 0b1000, 0o1, and 2.5 is 4.5", () => {
    const result = subtract(0b1000, 0o1, 2.5);

    expect(result).toEqual(4.5);
  });
});

describe("Proper subtractToString output", () => {
  test('subtractToString with arguments 10 and 5 and format "octal" is "0o5"', () => {
    const result = subtractToString("octal", 10, 5);

    expect(result).toEqual("0o5");
  });
});

describe("Proper errors on invalid input to subtract", () => {
  test("subtract with single argument 5 throws error", () => {
    try {
      subtract(5);
    } catch (err) {
      expect(err.message).toEqual(
        "Less than two arguments were passed to the subtract function. At least two parameters must be used."
      );
    }
  });
});
