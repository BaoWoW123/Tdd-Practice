import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

//Capitalize function
test("capitalize first character of string all lower case", () => {
  expect(capitalize("hello, world.")).toBe("Hello, world.");
});

test("capitalize first character of string all upper case", () => {
  expect(capitalize("hELLO, WORLD.")).toBe("HELLO, WORLD.");
});

test("don't capitalize with first character beig a number ", () => {
  expect(capitalize("1hello, world.")).toBe("1hello, world.");
});

//Reverse string function

test("reverse string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse string of numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});

//Calculator function

test("add posite numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add negative numbers", () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test("add non-integer with number to equal NaN", () => {
  expect(calculator.add(-1, "t")).toBe(NaN);
});

test("divide 1 / 2 to equal .5", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("divide negative numbers ", () => {
  expect(calculator.divide(1, -2)).toBe(-0.5);
});

test("divide from 0 to equal 0", () => {
  expect(calculator.divide(0, 2)).toBe(0);
});

test("divide by 0 to equal NaN instead of Infinity", () => {
  expect(calculator.divide(2, 0)).toBe(NaN);
});

test("multiply 2 * 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

//Caesar cipher function
test("cipher string shifted by 1 letter", () => {
  expect(caesarCipher("thisismypassword")).toBe("uijtjtnzqbttxpse");
});

test("cipher string with punctuation", () => {
  expect(caesarCipher("this, is, my password.")).toBe("uijt, jt, nz qbttxpse.");
});

test("cipher string with non-letter characters", () => {
  expect(caesarCipher("th1$, 1s, my p@55w0rd!")).toBe("ui1$, 1t, nz q@55x0se!");
});

//Analyze array function
test("analyze array and return object containing average, min, max, & length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze array with some integers as strings", () => {
  expect(analyzeArray([1, "8", 3, "4", 2, "6"])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze array that is a string", () => {
  expect(analyzeArray("notAnArray")).toStrictEqual("Not an array");
});

test("analyze object that is not an array", () => {
  expect(analyzeArray({ a: 1, b: 2 })).toStrictEqual("Not an array");
});
