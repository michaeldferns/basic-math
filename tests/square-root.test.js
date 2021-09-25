const { squareRoot, squareRootToString } = require("../funcs/square-root");

describe("Proper squareRoot output", () => {
  test("squareRoot with radicand 4 is 2", () => {
    const result = squareRoot(4);

    expect(result).toEqual(2);
  });

  test("squreRoot with radicand \"0x10\" is 4", () => {
    const result = squareRoot("0x10");

    expect(result).toEqual(4);
  })
});

describe("Proper squareRootToString output", () => {
  test('squareRootToString with radicand 4 and format "binary" is "0b10"', () => {
    const result = squareRootToString("binary", 4);

    expect(result).toEqual("0b10");
  });
});

describe("Proper errors on invalid input to squareRoot", () => {
  test("squareRoot with missing argument throws error", () => {
    try {
      squareRoot();
    } catch (err) {
      expect(err.message).toEqual(
        "The required radicand argument to squareRoot is undefined."
      );
    }
    
  });
});
