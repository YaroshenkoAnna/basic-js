const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const arrOfSymbolsMessage = message.toLowerCase().split("");
    const arrOfLettersKey = key.toLowerCase().split("");
    let indexOfKeyArray = 0;
    const encryptedMessage = arrOfSymbolsMessage.reduce((acc, symbol) => {
      if (indexOfKeyArray == arrOfLettersKey.length) {
        indexOfKeyArray = 0;
      }
      if (alphabet.includes(symbol)) {
        let indexOfEncryptedSymbol =
          alphabet.indexOf(symbol) +
          alphabet.indexOf(arrOfLettersKey[indexOfKeyArray]);
        if (indexOfEncryptedSymbol >= alphabet.length) {
          indexOfEncryptedSymbol -= alphabet.length;
        }
        indexOfKeyArray += 1;
        return acc + alphabet[indexOfEncryptedSymbol].toUpperCase();
      }
      return acc + symbol;
    }, "");

    if (this.isDirect === false) {
      return encryptedMessage.split("").reverse().join("");
    }
    return encryptedMessage;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const arrOfSymbolsEncryptedMessage = encryptedMessage
      .toLowerCase()
      .split("");
    const arrOfLettersKey = key.toLowerCase().split("");
    let indexOfKeyArray = 0;
    const decryptedMessage = arrOfSymbolsEncryptedMessage.reduce(
      (acc, symbol) => {
        if (indexOfKeyArray == arrOfLettersKey.length) {
          indexOfKeyArray = 0;
        }
        if (alphabet.includes(symbol)) {
          let indexOfDecryptedSymbol =
            alphabet.indexOf(symbol) -
            alphabet.indexOf(arrOfLettersKey[indexOfKeyArray]);
          if (indexOfDecryptedSymbol < 0) {
            indexOfDecryptedSymbol += alphabet.length;
          }
          indexOfKeyArray += 1;
          return acc + alphabet[indexOfDecryptedSymbol].toUpperCase();
        }
        return acc + symbol;
      },
      ""
    );
    if (this.isDirect === false) {
      return decryptedMessage.split("").reverse().join("");
    }
    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
