const { add, addToString } = require("../funcs/add");

describe("Proper add output", () => {
  test("add with arguments 1 and 2 is 3", () => {
    const result = add(1, 2);

    expect(result).toEqual(3);
  });

  test("add with arguments \"0b1101\", 5, and 0xf is ", () => {
    const result = add("0b1101", 5, 0xf);

    expect(result).toEqual(33);
  });
});

describe("Proper addToSum output", () => {
  test('add with arguments 1 and 2 with format "hex" is "0x3"', () => {
    const result = addToString("hex", 1, 2);

    expect(result).toEqual("0x3");
  });
});

describe("Proper errors on invalid input to add", () => {
  test("add with single argument 5 throws error", () => {
    try {
      add(5);
    } catch (err) {
      expect(err.message).toEqual(
        "Less than two arguments were passed to the add function. At least two parameters must be used."
      );
    }
  });
});
