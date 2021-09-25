const convertArgs = require("../utils/convert-args");
const numToString = require("../utils/num-to-string");
const validateInput = require("../utils/validate-input");

/**
 * Function to multiply provided arguments from left to right.
 * @param  {...(string | number)} args Arguments to be multiplied by each other from left to right. Fails if at least two are not passed.
 * @returns The product of the provided arguments.
 */
const multiply = (...args) => {
  // handle case where too few arguments are passed
  if (args.length < 2) {
    throw new Error(
      "Less than two arguments were passed to the multiply function. At least two parameters must be used."
    );
  }

  // validate the input to multiply
  validateInput("multiply", ...args);

  // convert any string arguments to numbers
  const convertedArgs = convertArgs(args);

  let result = convertedArgs[0];

  // multiply by each index after the first in convertedArgs
  for (let j = 1; j < convertedArgs.length; j++) {
    result *= convertedArgs[j];
  }

  return result;
};

/**
 * Function to multiply provided arguments from left to right and return the result in a string format.
 * @param {('decimal' | 'octal' | 'hex' | 'binary')} format The format to output the result to. Valid inputs are "decimal", "octal", "hex", and "binary".
 * @param  {...(string | number)} args Arguments to be multiplied by each other from left to right. Fails if at least two are not passed.
 * @returns The sum of the provided arguments in string format
 */
const multiplyToString = (format, ...args) => {
  const result = multiply(...args);

  return numToString(format, result);
};

module.exports = {
  multiply,
  multiplyToString,
};
