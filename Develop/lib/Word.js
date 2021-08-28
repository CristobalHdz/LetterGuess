const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map((letter) => new Letter(letter))
  };

  guessLetter(guess) {
    var answerCond = false;
    this.letters.forEach((letter) => {
      if (letter.checkLetter(guess)) {
        answerCond = true
      }
    });
    return answerCond
  };

  guessedCorrectly() {
    return this.letters.every((letter) => {
      letter.visible
    });
  };
}

module.exports = Word;
