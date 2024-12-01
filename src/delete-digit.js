const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfDigits = n.toString().split("");
  for (let index = 0; index < arrOfDigits.length - 1; index += 1) {
    if (arrOfDigits[index] < arrOfDigits[index + 1]) {
      arrOfDigits.splice(index, 1);
      return +arrOfDigits.join("");
    }
  }
  return +arrOfDigits.slice(0, -1).join("");
}

module.exports = {
  deleteDigit,
};
