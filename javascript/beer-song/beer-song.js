var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNumber) {
  if (verseNumber === 2){
    return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
  } else if (verseNumber === 1) {
    return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
  } else if (verseNumber === 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  }
  return verseNumber + ' bottles of beer on the wall, ' + verseNumber + ' bottles of beer.\nTake one down and pass it around, ' + (verseNumber - 1) + ' bottles of beer on the wall.\n'
};

BeerSong.prototype.sing = function(verseStart, verseEnd) {
  verseEnd ? verseEnd : verseEnd = 0
  var verses = ""
  for (var i = verseStart; i >= verseEnd; i--) {
    verses += this.verse(i) + "\n"
  }
  return verses.slice(0, -1)
};

module.exports = BeerSong;
