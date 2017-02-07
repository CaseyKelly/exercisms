var Words = function() {};

Words.prototype.count = function(wordString) {
    var wordArray = wordString.split(" ");
    var wordsObject = {};

    for (var i = 0; i < wordArray.length; i++) {
      wordsObject[wordArray[i]] = 1;
    }
    return wordsObject
};

module.exports = Words;
