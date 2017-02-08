var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNumber) {
  if (verseNumber === 2){
    var verseTemplate = verseNumber.toString() + " bottles of beer on the wall, " + verseNumber.toString() + " bottles of beer.\n" +
    "Take one down and pass it around, " + (verseNumber - 1).toString() + " bottle of beer on the wall.\n"
  } else {
    var verseTemplate = verseNumber.toString() + " bottles of beer on the wall, " + verseNumber.toString() + " bottles of beer.\n" +
    "Take one down and pass it around, " + (verseNumber - 1).toString() + " bottles of beer on the wall.\n"
  }

  return verseTemplate
};

module.exports = BeerSong;
