const validFuncs = {
  ADD: "add",
  DIVIDE: "divide",
  MULTIPLY: "multiply",
  NTH_ROOT: "nthRoot",
  POWER: "power",
  SQUARE_ROOT: "squareRoot",
  SUBTRACT: "subtract",
};

const validStringInput = (input) => {
  let valid = false;

  // Hex regex - Example: 0x1f
  const hexRegex = /^0x[0-9a-fA-F]+$/;
  // Octal regex - Example:  0o51
  const octalRegex = /^0o[0-7]+$/;
  // Binary regex - Example: 0b101
  const binaryRegex = /^0b[01]+$/;
  // Decimal regex - Example: -12.3213
  const decimalRegex = /^[-]?[1-9]\d*(\.\d+)?$/;

  // octal regex check
  if (octalRegex.test(input)) {
    valid = true;
  }

  // hex regex check
  if (hexRegex.test(input)) {
    valid = true;
  }

  // binary regex check
  if (binaryRegex.test(input)) {
    valid = true;
  }

  // decimal regex test
  if (decimalRegex.test(input)) {
    valid = true;
  }

  return valid;
};

const validateInput = (func, ...args) => {
  if (
    typeof func !== "string" ||
    Object.values(validFuncs).indexOf(func) === -1
  ) {
    throw new Error(
      "The value for parameter func passed to validateInput is invalid."
    );
  }

  for (let arg of args) {
    // check to see that the input is either a number or string
    if (typeof arg !== "number" && typeof arg !== "string") {
      throw new TypeError(
        `A value passed to the ${func} function is not a valid string or number.`
      );
    }

    // if the input is a string, test to see that it is a valid number format
    if (typeof arg === "string" && !validStringInput(arg)) {
      throw new Error(
        `The value ${arg} passed to the ${func} function is not valid.`
      );
    }
  }

  return;
};

module.exports = validateInput;
