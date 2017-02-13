var Anagram = function(input) {
  this.input = input;
};

Anagram.prototype.matches = function (wordArray) {
  anagrams = [];
  
  for (var i = 0; i < wordArray.length; i++) {
    if (this.input.length === wordArray[i].length) {
      anagrams.push(wordArray[i])
    }
  }
  return anagrams
};

module.exports = Anagram;
