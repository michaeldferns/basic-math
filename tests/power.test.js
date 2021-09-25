const { power, powerToString } = require("../funcs/power");

describe("Proper power output", () => {
  test("power with base of 2 and exponent of 2 is 4", () => {
    const result = power(2, 2);

    expect(result).toEqual(4);
  });

  test("power with base of 0x4 and exponent of 0o2 is 16", () => {
    const result = power(0x4, 0o2);

    expect(result).toEqual(16);
  });
});

describe("Proper powerToString output", () => {
  test('powerToString with base of 2 and exponent of 2 and format "binary" is "0b100"', () => {
    const result = powerToString("binary", 2, 2);

    expect(result).toEqual("0b100");
  });
});

describe("Proper errors on invalid input to power", () => {
  test("power with missing base throws error", () => {
    try {
      power();
    } catch (err) {
      expect(err.message).toEqual(
        "The required base argument is undefined."
      );
    }
  });

  test("power with missing exponent throws error", () => {
    try {
      power(3);
    } catch (err) {
      expect(err.message).toEqual(
        "The required exponent argument is undefined."
      );
    }
  });
});
