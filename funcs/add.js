const convertArgs = require("../utils/convert-args");
const numToString = require("../utils/num-to-string");
const validateInput = require("../utils/validate-input");

/**
 * Function to add provided arguments from left to right.
 * @param  {...(string | number)} args Arguments to be added together. Fails if at least two are not passed.
 * @returns The sum of the provided arguments.
 */
const add = (...args) => {
  // handle case where too few arguments are passed
  if (args.length < 2) {
    throw new Error(
      "Less than two arguments were passed to the add function. At least two parameters must be used."
    );
  }

  // validate the input to add
  validateInput("add", ...args);

  // convert any string arguments to numbers
  const convertedArgs = convertArgs(args);

  let result = convertedArgs[0];

  // add each number from left to right
  for (let j = 1; j < convertedArgs.length; j++) {
    result += convertedArgs[j];
  }

  return result;
};

/**
 * Function to add provided arguments from left to right and return the result in a string format.
 * @param {('decimal' | 'octal' | 'hex' | 'binary')} format The format to output the result to. Valid inputs are "decimal", "octal", "hex", and "binary".
 * @param  {...(string | number)} args Arguments to be added together. Fails if at least two are not passed.
 * @returns The sum of the provided arguments in string format.
 */
const addToString = (format, ...args) => {
  const result = add(...args);

  return numToString(format, result);
};

module.exports = {
  add,
  addToString,
};
