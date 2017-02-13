var Anagram = function(input) {
  this.input = input;
  this.split = input.split("");
};

Anagram.prototype.matches = function (wordArray) {
  anagrams = [];
  
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].split("").sort().join() === this.split.sort().join()) {
      anagrams.push(wordArray[i])
    }
  }
  return anagrams
};

module.exports = Anagram;
