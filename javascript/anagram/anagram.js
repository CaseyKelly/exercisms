var Anagram = function(input) {
    this.input = input
    this.split = input.toLowerCase().split("");
};

Anagram.prototype.matches = function(wordArray) {
    var anagrams = [];

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase().split("").sort().join() === this.split.sort().join()) {
            anagrams.push(wordArray[i])
        }
    }
    return anagrams
};

module.exports = Anagram;
