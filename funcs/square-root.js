const convertArgs = require("../utils/convert-args");
const numToString = require("../utils/num-to-string");
const validateInput = require("../utils/validate-input");

/**
 * Function that returns the square root of a passed radicand.
 * @param {(string | number)} radicand The radicand to take the square root of.
 * @returns The square root of the passed radicand.
 */
const squareRoot = (radicand) => {
  if (typeof radicand === "undefined") {
    throw new Error('The required radicand argument to squareRoot is undefined.')
  }

  // validate the input to squareRoot
  validateInput("squareRoot", radicand);

  // convert any string arguments to numbers
  const [convertedRadicand] = convertArgs([radicand]);

  return Math.sqrt(convertedRadicand);
};

/**
 * Function that returns the square root of a passed radicand in string format.
 * @param {('decimal' | 'octal' | 'hex' | 'binary')} format The format to output the result to. Valid inputs are "decimal", "octal", "hex", and "binary".
 * @param {(string | number)} radicand The radicand to take the square root of.
 * @returns The square root of the passed radicand in string format.
 */
const squareRootToString = (format, radicand) => {
  const result = squareRoot(radicand);

  return numToString(format, result);
};

module.exports = {
  squareRoot,
  squareRootToString,
};
