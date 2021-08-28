var show = "";
var rightGuess = "";

class Letter {
    constructor(data) {
        this.letter = data;
        this.guessed = false;
    };

    show(displayment, rightAnswer) {
        rightAnswer === true ?
            show = displayment
            :
            show = "_"
    };

    check(check, rightAnswer) {
        check === rightAnswer ?
            rightGuess = true
            :
            rightGuess = false
    };
};

module.exports = Letter;
