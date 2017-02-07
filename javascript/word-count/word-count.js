var Words = function() {};

Words.prototype.count = function(wordString) {
    var wordArray = wordString.split(/[ ,]+/)
    var wordsObject = {};

    for (var i = 0; i < wordArray.length; i++) {
      var num = wordArray[i];
      wordsObject[num] = wordsObject[num] ? wordsObject[num] + 1 : 1;
    }
    return wordsObject
};

module.exports = Words;
