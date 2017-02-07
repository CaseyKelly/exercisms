var Isogram = function(word) {
    this.word = word.toLowerCase();
};

Isogram.prototype.isIsogram = function() {
    var letters = this.word.split("")
    return letters.length === new Set(letters).size;
};

module.exports = Isogram;
