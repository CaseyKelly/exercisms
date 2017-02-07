var Words = function() {};

Words.prototype.count = function(inputString) {
    var cleanString = inputString.replace(/[|&;$%@"<>()+:!^.?¡¿]/g, "").replace(/[\n\t]/g, " ");
    var wordArray = cleanString.split(/[ ,]+/)

    var wordsObject = {};
    for (var i = 0; i < wordArray.length; i++) {
      var word = wordArray[i].toLowerCase();
      var chars = word.length;
      if (word.charAt(0) === "\'") word = word.substring(1, chars--);
	    if (word.charAt(--chars) === "\'") word = word.substring(0, chars);
      wordsObject[word] = wordsObject[word] ? wordsObject[word] + 1 : 1;
    }
    return wordsObject
};

module.exports = Words;
