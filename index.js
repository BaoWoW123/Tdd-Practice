function capitalize(str) {
  if (!isNaN(str[0])) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a + b;
  },
  subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a - b;
  },
  divide(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    else if (b == 0) return NaN;
    return a / b;
  },
  multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a * b;
  },
};

function caesarCipher(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    //checks if character is a letter
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
      let current = str.charCodeAt(i) + 1;
      if (current === 97);
      arr.push(String.fromCharCode(current));
    } else arr.push(str[i]);
  }
  return arr.join("");
}

function analyzeArray(array) {
  if (!Array.isArray(array)) return "Not an array";
  let object = {};
  object.average = array.reduce((a, b) => a + +b, 0) / array.length;
  object.length = array.length;
  object.max = Math.max(...array);
  object.min = Math.min(...array);
  return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
