var Words = function() {};

Words.prototype.count = function(inputString) {
    var cleanString = inputString.replace(/[|&;$%@"<>()+:!^.]/g, "");
    var wordArray = cleanString.split(/[ ,]+/)

    var wordsObject = {};
    for (var i = 0; i < wordArray.length; i++) {
      var num = wordArray[i].toLowerCase();
      wordsObject[num] = wordsObject[num] ? wordsObject[num] + 1 : 1;
    }
    return wordsObject
};

module.exports = Words;
