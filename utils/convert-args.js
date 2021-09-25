const stringToNum = require("./string-to-num");

const convertArgs = (input) => {
  if (!Array.isArray(input)) {
    throw new Error("The input provided to covertArgs is not a valid array.");
  }

  const convertedArgs = input.map((arg) => {
    if (typeof arg === "string") {
      return stringToNum(arg);
    }

    return arg;
  });

  return convertedArgs;
};

module.exports = convertArgs;
