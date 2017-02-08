var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNumber) {
  var bottles1 = verseNumber + " bottles"
  var bottles2 = (verseNumber - 1) + " bottles";
  var one = "one"

  if (verseNumber === 2){
    bottles2 = bottles2.slice(0, -1);
  } else if (verseNumber === 1) {
    bottles1 = bottles1.slice(0, -1);
    bottles2 = "no more bottles"
    one = "it"
  }

  var verseTemplate = bottles1 + " of beer on the wall, " + bottles1 + " of beer.\n" +
  "Take " + one + " down and pass it around, " + bottles2 + " of beer on the wall.\n"

  return verseTemplate
};

module.exports = BeerSong;
