# basic-math

## Introduction

> This library is created for the first programming assignment of the SENG 560 course of the Fall 21' semester at West Virginia University.
>
> The author of this code is Michael Ferns. Below are installation instructions along with supported functions and how to use them.

## Installation

> npm i --save @mferns/simple-math

## Requiring

> const simpleMath = require("@mferns/simple-math");

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

## add - simpleMath.add(...args)

> The add function accepts a number of string or number inputs but expects at least two.
>
> This function performs addition from left to right.
>
> simpleMath.add(1, 2) is valid.
>
> simpleMath.add(1, -3, "0xf", "0b11") is also valid.

## addToString - simpleMath.add(format, ...args)

> The addToString function works just as the add function does, but accepts a format to output the result as a string.
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> simpleMath.addToString("octal", 1, -3, 0xf, "0b11") would return "0o20".

## divide - simpleMath.divide(...args)

> The divide function accepts a number of string or number inputs but expects at least two.
>
> This function performs division from left to right.
>
> This function also throws an error if any number after the first argument is 0 or equates to 0.
>
> simpleMath.divide(10, 5) is valid.
>
> simpleMath.divide(0x3f, -2, "0o2") is also valid.

## divideToString - simpleMath.divideToString(format, ...args)

> The divideToString function works just as the divide function does, but accepts a format to output the result as a string.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> simpleMath.divideToString("binary", "0x64", 4, 0b101) would return "0b101".

## multiply - simpleMath.multiply(...args)

> The multiply function accepts a number of string or number inputs but expects at least two.
>
> This function performs multiplication from left to right.
>
> simpleMath.multiply(2, 5) is valid.
>
> simpleMath.multiply(0b111, 42, "0o2") is also valid.

## multiplyToString - simpleMath.multiplyToString(format, ...args)

> The multiplyToString function works just as the add function does, but accepts a format to output the result as a string.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> simpleMath.multiplyToString("binary", 1, "0xf", "0b11") would return "0b101101".

## power - simpleMath.power(base, exponent)

> The power function accepts a base and an exponent and returns the power of the base to the exponent.
>
> simpleMath.power(2, "0b111") is valid.

## powerToString - simpleMath.powerToString(format, base, exponent)

> The powerToString function works just as the add function does, but accepts a format to output the result as a string.
>
> simpleMath.powerToString("binary", 3, "0o2") would return "0b1001".

## squareRoot - simpleMath.squareRoot(radicand)

> The add function accepts a quotient and returns the square root.
>
> simpleMath.squareRoot(0x4) is valid.

## squareRootToString - simpleMath.squareRootToString(format, radicand)

> The squareRootToString function works just as the squareRoot function does, but accepts a format to output the result as a string.
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> simpleMath.squareRootToString("octal", 36) would return "0o6".

## subtract

> The subtract function accepts a number of string or number inputs but expects at least two.
>
> This function performs subtraction from left to right.
>
> simpleMath.subtract(", 2) is valid.
>
> simpleMath.subtract(1, -3, "0xf", "0b11") is also valid.

## subtractToString

> The subtractToString function works just as the subtract function does, but accepts a format to output the result as a string.
>
> This function performs subtraction from left to right.
>
> In this case, decimal outputs are supported.
>
> Supported inputs to the format parameter are "hex", "binary", "octal", and "decimal".
>
> simpleMath.subtractToString("decimal", 0xf, -2, "0b11") would return "14".
