const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = new Map();
  const result = [];

  for (const name of names) {
    if (!uniqueNames.has(name)) {
      result.push(name);
      uniqueNames.set(name, 1);
    } else {
      let number = uniqueNames.get(name);
      let newName = `${name}(${number})`;

      while (uniqueNames.has(newName)) {
        number++;
        newName = `${name}(${number})`;
      }

      result.push(newName);
      uniqueNames.set(name, number + 1);
      uniqueNames.set(newName, 1);

    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
