var Isogram = function(word) {
    this.word = word.toLowerCase().replace(/-/g, "");
};

Isogram.prototype.isIsogram = function() {
  console.log(this.word);
    var letters = this.word.split("")
    return letters.length === new Set(letters).size;
};

module.exports = Isogram;
