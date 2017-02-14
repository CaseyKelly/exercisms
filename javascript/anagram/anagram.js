var Anagram = function(input) {
    this.input = input
    this.split = input.toLowerCase().split("");
    this.sorted = this.split.sort().join();
};

Anagram.prototype.matches = function(wordArray) {
    var anagrams = [];

    if (arguments.length > 1) {
        wordArray = [...arguments];
    };

    function sortString(input) {
        return input.toLowerCase().split("").sort().join()
    };

    for (var i = 0; i < wordArray.length; i++) {
        if (sortString(wordArray[i]) === this.sorted && wordArray[i].toLowerCase() !== this.input.toLowerCase()) {
            anagrams.push(wordArray[i])
        }
    }
    return anagrams
};

module.exports = Anagram;
