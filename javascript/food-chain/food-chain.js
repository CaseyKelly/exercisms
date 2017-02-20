var FoodChain = function() {};

FoodChain.prototype.verse = function(verseNum) {
    var refrain = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
  
    if (verseNum === 2) {
      refrain = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n' + refrain
    } else if (verseNum === 1) {
      refrain  = 'I know an old lady who swallowed a fly.\n' + refrain
    }
      return refrain
};

module.exports = FoodChain;
