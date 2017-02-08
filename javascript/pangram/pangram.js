var Pangram = function(phrase) {
    this.phrase = phrase.replace(/[" .]/g, "").toLowerCase();
};

Pangram.prototype.isPangram = function() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
    ]
    var index = 0;
    var splitPhrase = this.phrase.split("")


    if (splitPhrase.length < 26) {
        return false
    }
    for (var i = 0; i < splitPhrase.length; i++) {
        index = alphabet.indexOf(splitPhrase[i]);
        if (index != -1) {
            alphabet.splice(index, 1)
        }
        if (alphabet.length === 0) {
            return true
        }
    }
    return false
}

module.exports = Pangram;
