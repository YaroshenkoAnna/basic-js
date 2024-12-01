const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
  }
  calculateDepth(arr) {
    this.prevArr = [...arr];
    console.log(this.depth);
    this.depth += 1;
    let currentArr = arr.flat();
    if (arraysEqual(this.prevArr, currentArr)) {
      let currentDepth = this.depth;
      this.depth = 0;
      return currentDepth;
    }
    return this.calculateDepth(currentArr);
  }
}

function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

module.exports = {
  DepthCalculator,
};
