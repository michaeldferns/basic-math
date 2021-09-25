const convertArgs = require("../utils/convert-args");
const numToString = require("../utils/num-to-string");
const validateInput = require("../utils/validate-input");

/**
 * Function that reutns the power of a passed base and exponent.
 * @param {(string | number)} base The base of exponentiation.
 * @param {(string | number)} exponent The exponent of exponentiation.
 * @returns The resulting power of the passed base and exponent.
 */
const power = (base, exponent) => {
  if (typeof base === "undefined") {
    throw new Error("The required base argument is undefined.");
  } else if (typeof exponent === "undefined") {
    throw new Error("The required exponent argument is undefined.");
  }

  // validate the input to power
  validateInput("power", base, exponent);

  // convert any string arguments to numbers
  const [convertedBase, convertedExponent] = convertArgs([base, exponent]);

  return Math.pow(convertedBase, convertedExponent);
};

/**
 * Function that reutns the power of a passed base and exponent in string format.
 * @param {('decimal' | 'octal' | 'hex' | 'binary')} format The format to output the result to. Valid inputs are "decimal", "octal", "hex", and "binary".
 * @param {(string | number)} base The base of exponentiation.
 * @param {(string | number)} exponent The exponent of exponentiation.
 * @returns The resulting power of the passed base and exponent in string format.
 */
const powerToString = (format, base, exponent) => {
  const result = power(base, exponent);

  return numToString(format, result);
};

module.exports = {
  power,
  powerToString,
};
