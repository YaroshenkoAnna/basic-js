const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, "additionSeparator": '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) {
    return str;
  }

  let additionStr = "";
  if (Object.hasOwn(options, "addition")) {
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = Object.hasOwn(options, "additionSeparator")
      ? options.additionSeparator
      : "|";
    additionStr = new Array(additionRepeatTimes)
      .fill("" + options.addition)
      .join(additionSeparator);
  }
  console.log(additionStr);
  let repeatTimes = options.repeatTimes || 1;
  let separator = Object.hasOwn(options, "separator") ? options.separator : "+";

  let repeatStr = new Array(repeatTimes)
    .fill("" + str + additionStr)
    .join(separator);
  return repeatStr;
}

module.exports = {
  repeater,
};
