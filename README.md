# basic-math

## Introduction

> This library is created for the first programming assignment of the SENG 560 course of the Fall 21' semester at West Virginia University.
>
> The author of this code is Michael Ferns. Below are installation instructions along with supported functions and how to use them.

## Installation

> npm i --save @mferns/basic-math

## Requiring

> const basicMath = require("@mferns/basic-math");

## Supported Inputs

> Each function is setup to accept numbers, literals, and string representing numbers and literals.

### Integers and floats can be represented in both number and string format:

> 1.2 , 4 , "-72" , and "8.30" are all valid inputs.
>
> Commas are not supported in string format.

### Hexadecimal literals and strings:

> 0xf and "0x1b" are both valid inputs.
>
> Hexadecimal numbers represented as non-integers are considered invalid.

### Octal literals and strings:

> 0o4 and "0o2" are both valid inputs.
>
> Octal numbers represented as non-integers are considered invalid.

### Binary literals and strings:

> 0b101 and "0b110" are both valid inputs.
>
> Binary numbers represented as non-integers are considered invalid.

## add - basicMath.add(...args)

> The add function accepts a number of string or number inputs but expects at least two.
>
> This function performs addition from left to right.
>
> basicMath.add(1, 2) is valid.
>
> basicMath.add(1, -3, "0xf", "0b11") is also valid.

## addToString - basicMath.add(format, ...args)

> The addToString function works just as the add function does, but accepts a format to output the result as a string.
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> basicMath.addToString("octal", 1, -3, 0xf, "0b11") would return "0o20".

## divide - basicMath.divide(...args)

> The divide function accepts a number of string or number inputs but expects at least two.
>
> This function performs division from left to right.
>
> This function also throws an error if any number after the first argument is 0 or equates to 0.
>
> basicMath.divide(10, 5) is valid.
>
> basicMath.divide(0x3f, -2, "0o2") is also valid.

## divideToString - basicMath.divideToString(format, ...args)

> The divideToString function works just as the divide function does, but accepts a format to output the result as a string.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> basicMath.divideToString("binary", "0x64", 4, 0b101) would return "0b101".

## multiply - basicMath.multiply(...args)

> The multiply function accepts a number of string or number inputs but expects at least two.
>
> This function performs multiplication from left to right.
>
> basicMath.multiply(2, 5) is valid.
>
> basicMath.multiply(0b111, 42, "0o2") is also valid.

## multiplyToString - basicMath.multiplyToString(format, ...args)

> The multiplyToString function works just as the add function does, but accepts a format to output the result as a string.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> basicMath.multiplyToString("binary", 1, "0xf", "0b11") would return "0b101101".

## power - basicMath.power(base, exponent)

> The power function accepts a base and an exponent and returns the power of the base to the exponent.
>
> basicMath.power(2, "0b111") is valid.

## powerToString - basicMath.powerToString(format, base, exponent)

> The powerToString function works just as the add function does, but accepts a format to output the result as a string.
>
> basicMath.powerToString("binary", 3, "0o2") would return "0b1001".

## squareRoot - basicMath.squareRoot(radicand)

> The add function accepts a quotient and returns the square root.
>
> basicMath.squareRoot(0x4) is valid.

## squareRootToString - basicMath.squareRootToString(format, radicand)

> The squareRootToString function works just as the squareRoot function does, but accepts a format to output the result as a string.
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> basicMath.squareRootToString("octal", 36) would return "0o6".

## subtract - basicMath.subtract(...args)

> The subtract function accepts a number of string or number inputs but expects at least two.
>
> This function performs subtraction from left to right.
>
> basicMath.subtract(", 2) is valid.
>
> basicMath.subtract(1, -3, "0xf", "0b11") is also valid.

## subtractToString - basicMath.subtractToString(format, ...args)

> The subtractToString function works just as the subtract function does, but accepts a format to output the result as a string.
>
> This function performs subtraction from left to right.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> basicMath.subtractToString("decimal", 0xf, -2, "0b11") would return "14".
