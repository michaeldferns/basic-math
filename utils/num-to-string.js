const validFormats = {
  DECIMAL: "decimal",
  OCTAL: "octal",
  HEX: "hex",
  BINARY: "binary",
};

const numToString = (format, num) => {
  // check that the format value is valid
  if (typeof format !== "string") {
    throw new TypeError("The value passed as a format is not a string.");
  } else if (Object.values(validFormats).indexOf(format) === -1) {
    throw new TypeError("The value passed as a format is not a valid one.");
  }

  let result = "";

  if (format === validFormats["DECIMAL"]) {
    result = num.toString(10);
  }

  if (format === validFormats["OCTAL"]) {
    result = "0o" + num.toString(8);
  }

  if (format === validFormats["HEX"]) {
    result = "0x" + num.toString(16);
  }

  if (format === validFormats["BINARY"]) {
    result = "0b" + num.toString(2);
  }

  return result;
};

module.exports = numToString;
