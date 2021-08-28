var visible = "";
var rightGuess = "";

class Letter {
    constructor(data) {
        this.letter = data;
        this.visible = false;
    };

    showLetter(displayment, rightAnswer) {
        rightAnswer === true ?
            show = displayment
            :
            show = "_"
    };

    guess(check, rightAnswer) {
        check === rightAnswer ?
            rightGuess = true
            :
            rightGuess = false
    };
};

module.exports = Letter;
