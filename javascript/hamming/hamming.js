var Hamming = function() {};

Hamming.prototype.compute = function(strandOne, strandTwo) {
  if (strandOne === strandTwo) {
    return 0
  } else {
    return 1
  }
};

module.exports = Hamming;
