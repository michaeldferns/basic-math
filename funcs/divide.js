const convertArgs = require("../utils/convert-args");
const numToString = require("../utils/num-to-string");
const validateInput = require("../utils/validate-input");

/**
 * Function to divide provided arguments from left to right.
 * @param  {...(string | number)} args Arguments to be divided by each other from left to right. Fails if at least two are not passed.
 * @returns The quotient of the provided arguments.
 */
const divide = (...args) => {
  // handle case where too few arguments are passed
  if (args.length < 2) {
    throw new Error(
      "Less than two arguments were passed to the divide function. At least two parameters must be used."
    );
  }

  // validate the input to divide
  validateInput("divide", ...args);

  // convert any string arguments to numbers
  const convertedArgs = convertArgs(args);

  // Check for any values equating to 0
  for (let convertedArg of convertedArgs) {
    if (convertedArg === 0) {
      throw new Error(
        "A value equal to 0 was passed after the first argument."
      );
    }
  }

  let result = convertedArgs[0];

  // divide by each index after the first in convertedArgs
  for (let j = 1; j < convertedArgs.length; j++) {
    result /= convertedArgs[j];
  }

  return result;
};

/**
 * Function to divide provided arguments from left to right and return the result in a string format.
 * @param {('decimal' | 'octal' | 'hex' | 'binary')} format The format to output the result to. Valid inputs are "decimal", "octal", "hex", and "binary".
 * @param  {...(string | number)} args Arguments to be divided by each other from left to right. Fails if at least two are not passed.
 * @returns The quotient of the provided arguments in string format.
 */
const divideToString = (format, ...args) => {
  const result = divide(...args);

  return numToString(format, result);
};

module.exports = {
  divide,
  divideToString,
};
